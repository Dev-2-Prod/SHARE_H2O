module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          900: "#000000",
          "900_a0": "#000000a0",
          "900_0f": "#0000000f",
          "900_11": "#00000011",
        },
        gray: {
          500: "#aaaaaa",
          600: "#757575",
          800: "#393939",
          900: "#14121b",
          "900_02": "#1e1e1e",
          "900_03": "#101117",
          "900_01": "#181a21",
        },
        white: { A700_b1: "#ffffffb1", A700: "#ffffff" },
        blue_gray: { 200: "#9eb8c1" },
        light_green: { A700: "#50f841" },
        yellow: { A700_01: "#ffd400", A700: "#ffd90f" },
        red: { 500: "#ff4a31" },
        orange: { 400: "#ffad31" },
        green: { A200: "#49e5b7" },
        deep_orange: { A700: "#d12a13" },
        cyan: { 800: "#00838f" },
        indigo: { 500: "#3f4dcb" },
      },
      boxShadow: {
        bs1: "0px 0px  20px 0px #0000000f",
        bs: "0px 0px  30px 0px #00000011",
      },
      fontFamily: {
        plusjakartasans: "Plus Jakarta Sans",
        montserratalternates: "Montserrat Alternates",
        spacegrotesk: "Space Grotesk",
        dmsans: "DM Sans",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
