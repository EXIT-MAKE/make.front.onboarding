import styled from "styled-components";

export const TodoListStyle = {
  Wrapper: styled.div`
    position: relative;
    margin: 176px 0 100px 50px;
    width: 425px;
    height: 796px;
    background-color: ${({ theme: { colors } }) => colors.white};
    box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
  `,
  Title: styled.div`
    display: inline-block;
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.title1};
    color: ${({ theme: { colors } }) => colors.makeBlue};
    font-size: 20px;
    margin: 30px 20px 10px 20px;
  `,
  AddButton: styled.button`
    position: absolute;
    top: 28px;
    right: 24px;
    background-color: rgba(74, 47, 236, 0.2);
    width: 32px;
    height: 32px;
    border: none;
    line-height: 32px;
    cursor: pointer;
    border-radius: 50%;
  `,
  Plus: styled.img.attrs({
    alt: "plus icon",
    src: "image/icn-plus.png",
  })`
    position: absolute;
    top: 4px;
    right: 4px;
  `,
};
