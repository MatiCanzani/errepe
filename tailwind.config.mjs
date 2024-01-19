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
      backgroundImage: {
        'event-1-desktop': "url('/src/images/works/Desktop_1.png')",
        'event-3-desktop': "url('/src/images/works/Desktop_3.png')",
        'event-2-desktop': "url('/src/images/works/Desktop_2.png')",
        'event-1-mobile': "url('/src/images/works/Mobile_1.png')",
        'event-2-mobile': "url('/src/images/works/Mobile_2.png')",
        'event-3-mobile': "url('/src/images/works/Mobile_3.png')",
      }
    },

    colors: {
      "deep-blue": "#121926",
      gold: "#FFD971",
      "light-gold": "#FCEDCD",
    },
  },
  plugins: [
		require('flowbite/plugin')
	],
};
