// PRESENTER(Markup / stateless)
import styled from "styled-components";
import TodoItem from "../todo-item/TodoItem";
import { TodoListStyle } from "./TodosList.style";
import {
  TodosProps,
  TodoProps,
  TodosListPresenterTypes,
} from "./TodoList.type";

function TodosListPresenter({
  todos,
  setTodos,
  handleAddTodo,
  text,
  setText,
  handleInputChange,
}: TodosProps & TodosListPresenterTypes): // { }: TodosListPresenterTypes
JSX.Element {
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
          ></TodoItem>
        );
      })}
    </TodoListStyle.Wrapper>
  );
}

export default TodosListPresenter;
