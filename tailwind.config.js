module.exports = {
  theme: {
    minHeight: {
      "60": "15rem",
      "48": "12rem",
      "44": "11rem",
    },
    minWidth: {
      "250px": "250px",
      "250px": "250px",
    },
    maxWidth: {
      "390px": "390px",
    },
    extend: {
      colors: {
        "autocare-blue": "#132F44",
        "autocare-orange": "#FF970D",
        "autocare-gold": "#F1C644",
        "autocare-bg": "#FAFAFA",
        "map-gray": "#B5BFBF",
        "hover-gray": "#C4C4C4",
        "cart-button": "#3A9860",
      },
      height: {
        "10/12": "83.333%",
        "2/5": "40%",
        "3/5": "60%",
        "70": "23rem",
        "60": "20rem",
        "65": "21rem",
      },
      maxHeight: {
        "60": "20rem",
        "70": "23rem",
        "80": "24rem",
        "90": "26rem",
        "100": "28rem",
      },
      minHeight: {
        hscreen: "55vh",
      },
      maxWidth: {
        xxs: "15rem",
        xxll: "40rem",
        exl: "50rem",
        "2exl": "82rem",

        xxl: "1440px",
      },
      right: {
        "1/2": "50%",
      },
      fontFamily: {
        segoe: ["Segoe UI Regular", "sans-serif"],
        "segoe-light": ["Segoe UI Light", "sans-serif"],
        "segoe-italic": ["Segoe UI Italic", "sans-serif"],
        "segoe-bold": ["Segoe UI Bold", "sans-serif"],
        "segoe-bolditalic": ["Segoe UI Bold Italic", "sans-serif"],

        graphik: ["Graphik", "sans-serif"],
        "graphic-super": ["Graphik Super", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ["hover", "focus"],
      borderWidth: ["hover", "focus"],
      display: ["hover", "focus", "group-focus"],
    },
  },
};
