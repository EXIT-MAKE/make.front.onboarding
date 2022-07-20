import styled from "styled-components";

declare module "styled-component" {
  export type DefaultThemeColorKey =
    | "white"
    | "purple"
    | "grey100"
    | "grey200"
    | "grey400"
    | "grey600"
    | "grey800"
    | "grey900"
    | "makeYellow"
    | "makeBlue";

  export type DefaultThemeFontFamilyKey = general;

  export type DefaultThemeFontKey =
    | "title0"
    | "title1"
    | "body"
    | "button1"
    | "button2";

  export interface DefaultTheme {
    colors: {
      [key in DefaultThemeColorKey]: string;
    };
    fontFamily: {
      [key in DefaultThemeFontFamilykey]: string;
    };
    fontSizes: {
      [key in DefaultThemeFontKey]: string;
    };
  }
}
