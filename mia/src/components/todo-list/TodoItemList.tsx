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
    let id: number =
      todoList.length !== 0 ? todoList[todoList.length - 1].id + 1 : 1;
    // let id: number = 1;
    if (text.length <= 0) return;
    else {
      setTodoList([...todoList, { id: id, content: text }]);
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
