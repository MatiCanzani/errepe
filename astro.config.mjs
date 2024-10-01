import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import partytown from "@astrojs/partytown";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://errepeproductora.com/",
  output: "hybrid",
  adapter: vercel({ webAnalytics: {
    enabled: true,
  },}),
  integrations: [tailwind(), react(), partytown(), icon()],
  compressHTML: true,
});