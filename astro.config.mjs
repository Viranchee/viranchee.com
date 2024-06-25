import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";

export default defineConfig({
  output: "hybrid",
  adapter: cloudflare(),
  integrations: [react()]
});