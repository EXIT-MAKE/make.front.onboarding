import { DefaultTheme, ThemeContext } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    white: "#FFFFFF",
    grey100: "#EDF0F3",
    grey200: "#DEE2E6",
    grey400: "#B4B8BC",
    grey600: "#6E7175",
    grey800: "#3A3D40",
    grey900: "#232527",
    makeYellow: "#FFE040",
    makeBlue: "#4A2FEC",
    body: "#E5E5E5",
    shadow: "0px 4px 12px rgba(59, 69, 88, 0.08)",
  },
  fontFamily: {
    general: "Noto Sans CJK KR",
  },
  fontWeight: {
    title0: "normal",
    title1: "bold",
    body: "normal",
    button1: "400",
    button2: "500",
  },
};

export default theme;
