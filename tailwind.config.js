/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        textPrimary: "#333",
        primary: "#FB137C",
        blushPink: "#FFD9DA",
        crimsonRed: "#89023E",
        coralRed: "##EA638C",
        dustyRose: "#CA7893",
        mistyRose: "#FFD9DA",
        mintGreen: "#34C759",
        whiteSmoke: "#F5F5F5",
        roseWood: "#7A505D",
        lightGray: "#D9D9D9",
      },
      fontSize: {
        "6xl": 46,
        "7xl": 52,
      },
    },
  },
  plugins: [],
};
