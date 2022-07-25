// PRESENTER(Markup / stateless)
import TodoItem from "../todo-item/TodoItem";
import { TodoListStyle } from "./TodoItemList.style";
import { TodoListPresenterTypes } from "./TodoItemList.type";

function TodoItemListPresenter({
  todoList,
  setTodoList,
  handleAddTodo,
  text,
  handleInputChange,
}: TodoListPresenterTypes): JSX.Element {
  return (
    <TodoListStyle.Wrapper>
      <TodoListStyle.Title>Todo ()</TodoListStyle.Title>
      <input
        type="text"
        onChange={handleInputChange}
        name="content"
        value={text}
        placeholder="오늘의 할 일은?"
      />
      <TodoListStyle.AddButton onClick={handleAddTodo}>
        <TodoListStyle.Plus />
      </TodoListStyle.AddButton>
      {todoList?.map((todo, i) => {
        // const id: number = i;
        return (
          <TodoItem
            key={i}
            index={i}
            todoList={todoList}
            todo={todo}
            setTodoList={setTodoList}
          />
        );
      })}
    </TodoListStyle.Wrapper>
  );
}

export default TodoItemListPresenter;
