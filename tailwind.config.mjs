/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        chalet: [
          "ChaletNewYorkNineteenSeventy",
          ...defaultTheme.fontFamily.sans,
        ],
        Cinematografica: ["Cinematografica", ...defaultTheme.fontFamily.sans],
        Impact: ["Impact", ...defaultTheme.fontFamily.sans],
        MyriadPro: ["MyriadPro", ...defaultTheme.fontFamily.sans],
        compactaBT: ["compactaBT", ...defaultTheme.fontFamily.sans],
        FormaDJRMicro: ["FormaDJRMicro", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      "deep-blue": "#121926",
      gold: "#FFD971",
      "light-gold": "#FCEDCD",
    },
  },
  plugins: [],
};
