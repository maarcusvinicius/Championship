/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Roboto, sans-serif",
      },

    backgroundImage: {
      app: 'url(/app-bg.png)'
    },

      colors: {
        white: {
          10: "#fdfdff",
        },
        blue: {
          40: "#006bb6",
          70: "#1e293b",
          90: "#0f172a"
        },
        gray: {
          20: '#d0d0d0',
        }
      },
    },
  },
  plugins: [],
};
