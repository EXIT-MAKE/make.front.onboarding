import styled from "styled-components";
import TodoItemPresenter from "./TodoItem.presenter";

export const TodoItemStyle = {
  CardWrapper: styled.div`
    position: relative;
    width: 380px;
    height: 230px;
    margin: 16px 18px;
    box-shadow: 0px 4px 12px rgba(59, 69, 88, 0.08);
    border-radius: 12px;
    background-color: ${({ theme: { colors } }) => colors.white};
    border: 1px solid ${({ theme: { colors } }) => colors.grey100};
  `,
  CardText: styled.p`
    width: 340px;
    height: 100px;
    margin: 20px;
  `,
  CardHeader: styled.div`
    position: relative;
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: space-between;
    padding: 0px 20px;
    margin-top: 10px;

    img {
      width: 25px;
      margin-right: 8px;
      border-radius: 12px;
      cursor: pointer;
    }
  `,
  CardUserName: styled.div`
    display: flex;
    align-items: center;
  `,
  KebabIcon: styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
  `,
  CardDropButtons: styled.div`
    position: absolute;
    top: 40px;
    left: 327px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  `,
  EditButton: styled.button`
    padding: 4px 8px 2px;
    text-decoration: none;
    border: none;
    border-radius: 4px 4px 0 0;
    display: inline-block;
    width: 40px;
    height: 24px;
    background-color: ${({ theme: { colors } }) => colors.grey900};
    color: ${({ theme: { colors } }) => colors.white};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.button1};
    font-size: 12px;
  `,
  DeleteButton: styled.button`
    padding: 2px 8px 4px;
    width: 40px;
    height: 24px;
    border-radius: 0 0 4px 4px;
    text-decoration: none;
    border: none;
    background-color: ${({ theme: { colors } }) => colors.grey900};
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.button1};
    font-size: 12px;
    color: ${({ theme: { colors } }) => colors.white};
  `,
  //-----------------------------------------------
  ModalWrapper: styled.div`
    z-index: 9999;
    position: absolute;
    width: 544px;
    height: 328px;
    border-radius: 12px;
    background-color: ${({ theme: { colors } }) => colors.white};
    box-shadow: 0px 4px 12px rgba(59, 69, 88, 0.08);
  `,
  ModalTopWrapper: styled.div`
    display: flex;
    align-items: center;
    img {
      border-radius: 15px;
      margin-right: 10px;
    }
    width: 100%;
    height: 52px;
    padding: 20px;
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.grey100};
  `,
  ModalInnerWrapper: styled.div`
    position: relative;
    width: 480px;
    height: 223px;
    margin: 28px 32px;
  `,
  ModalLabel: styled.label.attrs({
    for: "edit-content",
  })`
    display: block;
    font-size: 14px;
    color: ${({ theme: { colors } }) => colors.grey600};
  `,
  ModalTextArea: styled.textarea.attrs({
    id: "edit-content",
  })`
    box-sizing: border-box;
    outline: 0;
    resize: none;
    width: 100%;
    height: 120px;
    border-radius: 8px;
    border: 1px solid ${({ theme: { colors } }) => colors.grey200};
  `,
  ModalButton: styled.button`
    display: block;
    border: none;
    border-radius: 8px;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 106px;
    height: 40px;
    background-color: ${({ theme: { colors } }) => colors.makeYellow};
    cursor: pointer;
  `,
};
