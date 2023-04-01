/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#e270f9",

          secondary: "#60b6d1",

          accent: "#b3fcfb",

          neutral: "#222B35",

          "base-100": "#ffffff",

          info: "#24B7E0",

          success: "#62DAB2",

          warning: "#F6B104",

          error: "#F95653",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
