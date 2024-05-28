/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      screens: {
        xs: { min: "10px", max: "540px" },
        // => @media (min-width: 10px) and (max-width: 540px) { ... }
        "3xl": { min: "1536px", max: "2010px" },
        // => @media (min-width: 1536px) and (max-width: 2010px) { ... }
      },
      colors: {
        "custom-blue-1": "#05A3EC",
        "custom-blue-2": "#03A4ED",
      },
    },
  },
  plugins: [],
};
