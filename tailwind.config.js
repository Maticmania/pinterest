/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // ...
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('/src/assets/Image/backgroud.avif')",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

