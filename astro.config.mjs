import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";


// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: vercel(),
  integrations: [tailwind(), react()],
  buildOptions: {
    loaders: {
      ".js": "esbuild",
      ".jsx": "esbuild",
      ".ts": "esbuild",
      ".tsx": "esbuild"
    }
  }
});