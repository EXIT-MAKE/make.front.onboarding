import styled from "styled-components";
import MakeLogo from "../share/Logo/MakeLogo";

export const HeaderStyle = {
  MakeLogo: styled(MakeLogo).attrs({ width: 115 })``,
  HeaderWrapper: styled.header`
    z-index: 9999;
    position: fixed;
    background-color: ${({ theme: { colors } }) => colors.grey100};
    top: 0;
    left: 0;
    right: 0;
    height: 120px;
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.grey200};
  `,
  HeaderInnerWrapper: styled.div`
    display: flex;
    justify-content: space-between;
  `,
};

export const HeaderWrapperProps = {};

export const HeaderInnerWrapper = {};
