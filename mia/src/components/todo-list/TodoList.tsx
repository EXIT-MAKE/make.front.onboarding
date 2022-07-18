// CONTAINER(logic / stateful)
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TodosListPresenter from "./TodoList.presenter";
import { setStorageItem } from "../../utils/windowLocalStorage";
import { getStorageItem } from "../../utils/windowLocalStorage";
import type { TodoProps } from "./TodoList.type";

const Container = styled.div`
  width: 425px;
  height: 796px;
  background: #eeeeee;
  border: 1px solid limegreen;
`;

function TodoList(): JSX.Element {
  let [todos, setTodos] = useState<TodoProps[]>();
  let [text, setText] = useState<string>("");

  useEffect(() => {
    async function testSetTodos() {
      const localTodoList = await getStorageItem("content");
      return setTodos(localTodoList);
    }
    testSetTodos();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleAddTodo = () => {
    return new Promise(function (resolve) {
      if (text.length <= 0) return;
      else {
        setTodos([{ index: 0, content: text }]);
        setTodos([...todos, { index: todos.length, content: text }]);
        setStorageItem("content", todos);
      }
    });
  };

  return (
    <TodosListPresenter
      text={text}
      setText={setText}
      handleAddTodo={handleAddTodo}
      handleInputChange={handleInputChange}
      todos={todos}
      setTodos={setTodos}
    />
  );
}

export default TodoList;
