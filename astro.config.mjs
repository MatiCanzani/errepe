import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import partytown from "@astrojs/partytown";
import icon from "astro-icon";


// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: vercel(),
  integrations: [tailwind(), react(), partytown(), icon()],
  buildOptions: {
    loaders: {
      ".js": "esbuild",
      ".jsx": "esbuild",
      ".ts": "esbuild",
      ".tsx": "esbuild"
    }
  }
});