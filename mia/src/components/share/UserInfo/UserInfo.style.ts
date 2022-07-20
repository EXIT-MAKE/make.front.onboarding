import { title } from "process";
import styled from "styled-components";

const UserInfoStyle = {
  UserInfoBox: styled.div`
    margin: 30px 50px 0 0;
    width: 280px;
    height: 64px;
    border-radius: 66px;
    position: relative;
    box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.08);
    background-color: ${({ theme: { colors } }) => colors.white};
  `,
  UserLogo: styled.img.attrs({
    alt: "user logo",
    src: "image/test.png",
  })`
    width: 45px;
    height: 45px;
    border-radius: 50px;
    position: absolute;
    top: 10px;
    left: 15px;
  `,
  UserContentBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: absolute;
    top: 10px;
    left: 85px;
  `,
  UserName: styled.span`
    font-weight: 700;
    margin: ;
  `,
  UserEmail: styled.span`
    color: ${({ theme: { colors } }) => colors.grey400}
    font-weight: 400;
    margin: ;
  `,
};

export default UserInfoStyle;
