import styled from "styled-components";

const MakeLogoStyle = {
  Logo: styled.img.attrs({
    alt: "make logo",
    src: "image/make-logo.png",
  })`
    width: 115px;
    height: 48px;
    margin: 36px 0 36px 50px;
  `,
  HeaderTitle: styled.h1.attrs({}),
};

export default MakeLogoStyle;
