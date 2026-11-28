import "@fontsource-variable/bricolage-grotesque";
import bricolageLatin from "@fontsource-variable/bricolage-grotesque/files/bricolage-grotesque-latin-wght-normal.woff2?url";
import "@fontsource-variable/jetbrains-mono";
import { StrictMode } from "react";
import { preload } from "react-dom";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App";
import "./globals.css";

// Preload the latin subset so text renders in the display face without a font swap
preload(bricolageLatin, { as: "font", type: "font/woff2", crossOrigin: "anonymous" });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
