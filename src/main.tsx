import "@fontsource-variable/inter";
import interLatin from "@fontsource-variable/inter/files/inter-latin-wght-normal.woff2?url";
import { StrictMode } from "react";
import { preload } from "react-dom";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App";
import "./globals.css";

// Preload the latin subset so text renders in Inter without a font swap
preload(interLatin, { as: "font", type: "font/woff2", crossOrigin: "anonymous" });

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
