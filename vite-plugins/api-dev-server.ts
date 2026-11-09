import { existsSync } from "node:fs";
import type { IncomingMessage, ServerResponse } from "node:http";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { type Connect, loadEnv, type Plugin, type ResolvedConfig } from "vite";

const API_DIR = path.resolve(import.meta.dirname, "../api");

type Handler = (request: Request) => Response | Promise<Response>;
type ModuleLoader = (file: string) => Promise<Record<string, Handler | undefined>>;

/**
 * Local stand-in for Vercel Functions: serves `api/**` handlers (Web-standard
 * `export function GET(request: Request)`) from `vite` and `vite preview`, so the whole
 * site runs with one command. In production Vercel deploys `api/` itself.
 */
export function apiDevServer(): Plugin {
  return {
    name: "api-dev-server",
    configureServer(server) {
      // ssrLoadModule picks up edits to api/ without restarting the dev server
      mountApi(server.config, server.middlewares, (file) => server.ssrLoadModule(file));
    },
    configurePreviewServer(server) {
      // Node strips the TypeScript types itself
      mountApi(server.config, server.middlewares, (file) => import(pathToFileURL(file).href));
    },
  };
}

function mountApi(config: ResolvedConfig, middlewares: Connect.Server, load: ModuleLoader) {
  // Expose all .env values (not just VITE_*) to the handlers, like Vercel does
  const env = loadEnv(config.mode, config.root, "");
  for (const [key, value] of Object.entries(env)) {
    process.env[key] ??= value;
  }

  middlewares.use("/api", (req, res, next) => {
    handle(load, req, res).catch(next);
  });
}

function resolveRoute(pathname: string): string | null {
  const route = pathname.replace(/^\/+|\/+$/g, "");
  // Like Vercel, files and folders prefixed with "_" are private helpers, not routes
  if (route.split("/").some((segment) => segment.startsWith("_") || segment === "..")) {
    return null;
  }

  for (const candidate of [`${route}.ts`, `${route}/index.ts`]) {
    const file = path.join(API_DIR, candidate);
    if (existsSync(file)) return file;
  }
  return null;
}

// Connect adds `originalUrl` before stripping the mount point from `url`
type ConnectRequest = IncomingMessage & { originalUrl?: string };

async function handle(load: ModuleLoader, req: ConnectRequest, res: ServerResponse) {
  const url = new URL(req.originalUrl ?? `/api${req.url}`, `http://${req.headers.host}`);
  const file = resolveRoute(url.pathname.replace(/^\/api/, ""));
  if (!file) {
    // Never fall through to Vite, which would serve the API source files
    res.statusCode = 404;
    res.end("Not Found");
    return;
  }

  const mod = await load(file);
  const handler = mod[req.method ?? "GET"];
  if (!handler) {
    res.statusCode = 405;
    res.end("Method Not Allowed");
    return;
  }

  const hasBody = req.method !== "GET" && req.method !== "HEAD";
  const init: RequestInit & { duplex?: "half" } = {
    method: req.method,
    headers: Object.entries(req.headers).flatMap(([key, value]) =>
      value === undefined ? [] : [[key, Array.isArray(value) ? value.join(", ") : value]],
    ),
  };
  if (hasBody) {
    // Node's fetch accepts the incoming stream as a body when duplex is "half"
    init.body = req as unknown as ReadableStream;
    init.duplex = "half";
  }
  const request = new Request(url, init);

  const response = await handler(request);
  res.statusCode = response.status;
  response.headers.forEach((value, key) => res.setHeader(key, value));
  res.end(Buffer.from(await response.arrayBuffer()));
}
