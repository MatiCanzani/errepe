import { defineConfig } from "astro/config";
import vercel from '@astrojs/vercel';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://errepeproductora.com/",
  output: "server",
  adapter: vercel(),
  integrations: [tailwind(), react(), icon()],
  compressHTML: true,
});
