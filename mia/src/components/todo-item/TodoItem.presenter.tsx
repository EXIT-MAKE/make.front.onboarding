import { TodoItemStyle } from "./TodoItem.style";
import Menu from "../share/Menu/Menu";

function TodoItemPresenter({
  newText,
  edit,
  todo,
  editInputRef,
  handleEditTodo,
  handleRemoveTodo,
  handleNewInputChange,
  handleUpdateButton,
}) {
  return (
    <>
      {edit ? (
        <>
          <TodoItemStyle.ModalWrapper>
            <TodoItemStyle.ModalTopWrapper>
              <img src="image/test.png" />
              <span>Mia</span>
              <button>닫기</button>
            </TodoItemStyle.ModalTopWrapper>
            <TodoItemStyle.ModalInnerWrapper>
              <TodoItemStyle.ModalLabel>{"내용 수정"}</TodoItemStyle.ModalLabel>
              <TodoItemStyle.ModalTextArea
                value={newText}
                onChange={handleNewInputChange}
                ref={editInputRef}
              ></TodoItemStyle.ModalTextArea>
              <TodoItemStyle.ModalButton onClick={handleUpdateButton}>
                완료
              </TodoItemStyle.ModalButton>
            </TodoItemStyle.ModalInnerWrapper>
          </TodoItemStyle.ModalWrapper>
        </>
      ) : (
        <>
          <TodoItemStyle.CardWrapper>
            <TodoItemStyle.CardHeader>
              <TodoItemStyle.CardUserName>
                <img src="image/test.png" />
                <span>Mia</span>
              </TodoItemStyle.CardUserName>
              <TodoItemStyle.KebabIcon src="image/kebab.svg" />
            </TodoItemStyle.CardHeader>
            <TodoItemStyle.CardText>{todo.content}</TodoItemStyle.CardText>
            <TodoItemStyle.CardDropButtons>
              <TodoItemStyle.EditButton onClick={() => handleEditTodo()}>
                수정
              </TodoItemStyle.EditButton>
              <TodoItemStyle.DeleteButton
                onClick={() => handleRemoveTodo(todo.index)}
              >
                삭제
              </TodoItemStyle.DeleteButton>
            </TodoItemStyle.CardDropButtons>
            {/* <Menu
              todo={todo}
              handleEditTodo={handleEditTodo}
              handleRemoveTodo={handleRemoveTodo}
            /> */}
          </TodoItemStyle.CardWrapper>
        </>
      )}
    </>
  );
}

export default TodoItemPresenter;
