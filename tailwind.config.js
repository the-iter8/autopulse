/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#FF79C6",
          secondary: "#BD93F9",
          accent: "#FFB86C",
          neutral: "#414558",
          "base-100": "#282A36",
          info: "#8BE9FD",
          success: "#50FA7B",
          warning: "#F1FA8C",
          error: "#FF5555",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
