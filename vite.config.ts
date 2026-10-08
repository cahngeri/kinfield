import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
// vite-plugin-prerender's ESM build is broken (uses require); load the CJS build instead.
const vitePrerender = require("vite-plugin-prerender");

// https://vitejs.dev/config/
export default defineConfig({
  // The prerenderer's bundled Chromium (2019) can't parse optional chaining (?.),
  // so downlevel the bundle for the prerender pass and older browsers.
  build: {
    target: "es2016",
  },
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    vitePrerender({
      staticDir: path.join(__dirname, "dist"),
      routes: [
        "/",
        "/winning-project",
        "/about",
        "/insight",
        "/insight/why-85-percent-parents-read-reviews",
        "/insight/community-seeding-baby-brands",
        "/insight/phase-based-marketing",
        "/insight/reassurance-economy",
        "/contact",
        "/portfolio/bebio",
        "/portfolio/nary-babywear",
      ],
      renderer: new vitePrerender.PuppeteerRenderer({
        renderAfterDocumentEvent: "seo-ready",
        maxConcurrentRoutes: 2,
      }),
      postProcess(renderedRoute) {
        renderedRoute.route = renderedRoute.originalRoute;
        return renderedRoute;
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
