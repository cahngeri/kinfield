import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { createRequire } from "module";
import { execSync } from "child_process";

const require = createRequire(import.meta.url);
// vite-plugin-prerender's ESM build is broken (uses require); load the CJS build instead.
const vitePrerender = require("vite-plugin-prerender");

// CI environments (e.g. Cloudflare Workers Builds) lack the X11 libraries the
// bundled Chromium needs, so prerender is skipped there unless PRERENDER=1.
const prerenderEnabled =
  process.env.PRERENDER === "1" ||
  (process.env.PRERENDER !== "0" && !process.env.CI);

const prerenderPlugin = prerenderEnabled
  ? vitePrerender({
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
    })
  : undefined;

function countFiles(dir: string): number {
  let total = 0;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) total += countFiles(path.join(dir, entry.name));
    else total += 1;
  }
  return total;
}

// Cloudflare Workers rejects legacy Pages `_redirects` even as a leftover file
// (error 100324), so strip it from the build output and log a build fingerprint.
const deploySafetyPlugin: Plugin = {
  name: "deploy-safety",
  buildStart() {
    let sha = "unknown";
    try {
      sha = execSync("git rev-parse --short HEAD", { stdio: ["ignore", "pipe", "ignore"] })
        .toString()
        .trim();
    } catch {
      sha = process.env.CF_PAGES_COMMIT_SHA?.slice(0, 7) ?? "unknown";
    }
    console.log(
      `[deploy-safety] HEAD=${sha} CI=${process.env.CI ?? "0"} PRERENDER=${process.env.PRERENDER ?? "unset"} public/_redirects=${fs.existsSync(path.join(__dirname, "public", "_redirects"))}`
    );
  },
  closeBundle() {
    const dist = path.join(__dirname, "dist");
    if (!fs.existsSync(dist)) return;
    for (const name of ["_redirects", "_headers"]) {
      const target = path.join(dist, name);
      if (fs.existsSync(target)) {
        fs.rmSync(target, { force: true });
        console.log(`[deploy-safety] removed dist/${name}`);
      }
    }
    console.log(`[deploy-safety] dist contains ${countFiles(dist)} files`);
  },
};

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
    ...(prerenderPlugin ? [prerenderPlugin] : []),
    deploySafetyPlugin,
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
