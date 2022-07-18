import { MenuPresenterProps } from "./Menu.type";

function MenuPresenter({
  // todo,
  menuDrop,
  optionList,
  // handleOptionClick,
  handleKebabClick,
  handleEditTodo,
  handleRemoveTodo,
}: MenuPresenterProps) {
  return (
    <>
      {menuDrop ? (
        <div>
          {/* <button onClick={() => handleEditTodo(todo)}>수정</button> */}
          {/* <button onClick={() => handleRemoveTodo(todo.index)}>삭제</button> */}
        </div>
      ) : null}
    </>
  );
}

export default MenuPresenter;
