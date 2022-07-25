// CONTAINER(logic / stateful)
import React, { useCallback, useEffect, useState } from "react";
import TodoItemListPresenter from "./TodoItemList.presenter";
import { setStorageItem } from "../../utils/windowLocalStorage";
import { getStorageItem } from "../../utils/windowLocalStorage";
import type { TodoProps } from "./TodoItemList.type";

function TodoItemList(): JSX.Element {
  let [todoList, setTodoList] = useState<TodoProps[]>([]);
  let [text, setText] = useState<string>("");

  const testSetTodoList = useCallback(async () => {
    const localTodoList = await getStorageItem("content");
    if (localTodoList === null) return;
    setTodoList(localTodoList);
  }, [getStorageItem]);

  useEffect(() => {
    testSetTodoList();
  }, [testSetTodoList]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleAddTodo = async (e) => {
    if (text.length <= 0) return;
    else {
      setTodoList([...todoList, { id: todoList.length + 1, content: text }]);
      await setStorageItem("content", todoList);
    }
  };

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
