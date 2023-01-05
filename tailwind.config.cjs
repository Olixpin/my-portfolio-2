/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class", // or 'media' or 'class
  theme: {
    extend: {
      gridTemplateColumns: {
        grid: "repeat(auto-fit, minmax(297px, 1fr))",
      },
      screens: {
        lw: "1440px",
      },
    },
    colors: {
      background: "#F2F2F7",
      backgroundDark: "#181E27",
      backgroundDark2: "#222A36",
      overlay: "rgba(3, 41, 111, 0.48)",
      overlay2: "rgba(3, 41, 111, 0.15)",
      textHeader: "#1C1C1E",
      textBody: "#48484A",
      textPlacecholder: "#A7A7A7",
      textWhite: "#FCFCFC",
      successLight: "#E5FCF6",
      successMain: "#0FB56D",
      successDark: "#26704C",
      warningLight: "#FFFBA8",
      warningDark: "#B0AB39",
      warningMain: "#E9E132",
      primaryLightest: "#CDDCF8",
      primaryLight: "#ACC5F4",
      primaryMain: "#0652DD",
      primaryDark: "#0544B8",
      primaryDeep: "#03296F",
      disabledDisabled: "#C5C5C5",
      stokeDark: "#434343",
      stokeLight: "#A7A7A7",
      errorLight: "#FFD8D6",
      errorDark: "#A81414",
      errorMain: "#FF2635",
      grey100: "#DCDCDC",
      grey200: "#C5C5C5",
      grey300: "#8A8A8A",
      grey400: "#6D6D6D",
      grey500: "#434343",
      grey600: "#353535",
      grey700: "#282828",
      grey800: "#101010",
      coverContainer: "#CDDCF8",
      white: "#FFFFFF",
      backgroundWhite: "#FFFFFF",
      eventshome: "#F7F7F7",
      btnbg: "#CDDCF8",
      searchbd: "#CAD0DD",
      selectdesc: "#BABABA",
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      function extractColorVars(color) {
        return Object.entries(color).reduce((acc, [key, value]) => {
          if (typeof value === "string") {
            acc[`--color-${key}`] = value;
          } else {
            acc = { ...acc, ...extractColorVars(value) };
          }
          return acc;
        }, {});
      }
      addBase({
        ":root": {
          ...extractColorVars(theme("colors")),
        },
      });
    },
  ],
};
