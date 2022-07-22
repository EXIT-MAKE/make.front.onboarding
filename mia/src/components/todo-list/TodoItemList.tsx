// CONTAINER(logic / stateful)
import React, { useEffect, useState } from "react";
import TodoItemListPresenter from "./TodoItemList.presenter";
import { setStorageItem } from "../../utils/windowLocalStorage";
import { getStorageItem } from "../../utils/windowLocalStorage";
import type { TodoProps } from "./TodoItemList.type";

function TodoItemList(): JSX.Element {
  let [todoList, setTodoList] = useState<TodoProps[]>([]);
  let [text, setText] = useState<string>("");

  useEffect(() => {
    async function testSetTodoList() {
      const localTodoList = await getStorageItem("content");
      if (localTodoList === null) return;
      return setTodoList(localTodoList);
    }
    testSetTodoList();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleAddTodo = async () => {
    if (text.length <= 0) return;
    else {
      setTodoList([...todoList, { index: todoList.length, content: text }]);
      await setStorageItem("content", todoList);
    }
  };

  // const handleAddTodo = () => {
  //   return new Promise(function (resolve) {
  //     if (text.length <= 0) return;
  //     else {
  //       setTodoList([{ index: 0, content: text }]);
  //       setTodoList([...todoList, { index: todoList.length, content: text }]);
  //       setStorageItem("content", todoList);
  //     }
  //   });
  // };

  return (
    <TodoItemListPresenter
      text={text}
      setText={setText}
      handleAddTodo={handleAddTodo}
      handleInputChange={handleInputChange}
      todoList={todoList}
      setTodoList={setTodoList}
    />
  );
}

export default TodoItemList;
