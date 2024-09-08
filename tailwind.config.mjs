/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "dark-gray-blue": "hsl(217, 19%, 35%)",
        "desat-dark-blue": "hsl(214, 17%, 51%)",
        "gray-blue": "hsl(212, 23%, 69%)",
        "light-gray-blue": "hsl(2120, 46%, 95%)",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      fontSize: {
        body: "13px",
      },
    },
  },
  plugins: [],
};
