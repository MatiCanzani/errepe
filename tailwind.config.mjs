/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./components/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"
  ],
  theme: {
    extend: {
      fontFamily: {
        chalet: ["ChaletNewYorkNineteenSeventy", ...defaultTheme.fontFamily.sans],
        Cinematografica: ["Cinematografica", ...defaultTheme.fontFamily.sans],
        Impact: ["Impact", ...defaultTheme.fontFamily.sans],
        MyriadPro: ["MyriadPro", ...defaultTheme.fontFamily.sans],
        compactaBT: ["compactaBT", ...defaultTheme.fontFamily.sans],
        FormaDJRMicro: ["FormaDJRMicro", ...defaultTheme.fontFamily.sans],
        Rocgroteskcond: ["Rocgroteskcond", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "event-1-desktop": "url('/src/images/works/Desktop_1.png')",
        "event-3-desktop": "url('/src/images/works/Desktop_3.png')",
        "event-2-desktop": "url('/src/images/works/Desktop_2.png')",
        "event-1-mobile": "url('/src/images/works/Mobile_1.png')",
        "event-2-mobile": "url('/src/images/works/Mobile_2.png')",
        "event-3-mobile": "url('/src/images/works/Mobile_3.png')",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 25s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      dropShadow: {
        '3xl': '0 25px 25px rgba(0, 0, 0, 0.5)',
        '4xl': '0 10px 10px rgba(0, 0, 0, 0.5)',
      }
    },
    colors: {
      "deep-blue": "#121926",
      gold: "#FFD971",
      "light-gold": "#FCEDCD",
      "brown-1": "#D3B98D",
    },
  },
  plugins: [require("flowbite/plugin")],
};
