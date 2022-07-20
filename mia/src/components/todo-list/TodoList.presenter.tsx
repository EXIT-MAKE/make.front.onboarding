// PRESENTER(Markup / stateless)
import TodoItem from "../todo-item/TodoItem";
import { TodoListStyle } from "./TodosList.style";
import { TodosProps, TodosListPresenterTypes } from "./TodoList.type";

function TodosListPresenter({
  todos,
  setTodos,
  handleAddTodo,
  text,
  handleInputChange,
}: TodosProps & TodosListPresenterTypes): JSX.Element {
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
      {todos?.map((todo, i) => {
        const id: number = i;
        return (
          <TodoItem
            key={i}
            id={id}
            todos={todos}
            todo={todo}
            setTodos={setTodos}
          />
        );
      })}
    </TodoListStyle.Wrapper>
  );
}

export default TodosListPresenter;
