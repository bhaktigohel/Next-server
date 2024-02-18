/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  images: {
    // domains: ["https://www.instagram.com", "www.instagram.com", "instagram.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.instagram.com",
      },
    ],
  },
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      // primary: defaultTheme.darkMode ? "black" : "white",
      // secondary: defaultTheme.darkMode ? "green" : "olive",
      primary: defaultTheme.darkMode ? "#1e293b" : "#E0E0E0",
      textPrimary: defaultTheme.darkMode ? "#E0E0E0" : "#1e293b",
      textSecondary: defaultTheme.darkMode ? "#94a3b8" : "#1e293b",
      paperPrimary: defaultTheme.darkMode ? "#15112C" : "#E0E0E0",
      mainBGPrimary: "#f5f6f7",
      mainBGDarkPrimary: "#0f172a",
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      zIndex: {
        100: "100",
      },
      fontFamily: {
        fontFamily: {
          sans: ["BeautifulQueen", ...defaultTheme.fontFamily.sans],
        },
      },
    },
  },
  plugins: [],
};
