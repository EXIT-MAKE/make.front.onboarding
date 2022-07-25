import React, { useState, useEffect, useRef } from "react";
import {
  removeStorageItem,
  setStorageItem,
} from "../../utils/windowLocalStorage";
import TodoItemPresenter from "./TodoItem.presenter";

function TodoItem({ index, todoList, todo, setTodoList }) {
  const [edit, setEditTodo] = useState<boolean>(false);
  const [newText, setNewText] = useState<string>(
    todoList?.content ? todoList.content : ""
  );

  // ----- 수정
  const editInputRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (edit) {
      editInputRef.current.focus();
    }
  }, [edit]);

  const handleEditTodo = () => {
    setEditTodo(true);
  };

  const handleNewInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewText(e.target.value);
  };

  const handleUpdateButton = () => {
    const newTodoList = todoList.map((todo) => ({
      ...todo,
      content:
        index !== todo.id && index === todo.id - 1 ? newText : todo.content,
    }));

    setTodoList(newTodoList);
    setStorageItem("content", newTodoList);
    setEditTodo(false);
  };

  // ----- 삭제
  const handleRemoveTodo = (id) => {
    const result = todoList.filter((todo) => {
      return todo.index !== id;
    });

    setTodoList(result);
    removeStorageItem("content");
    setStorageItem("content", result);
  };

  return (
    <TodoItemPresenter
      edit={edit}
      todo={todo}
      handleEditTodo={handleEditTodo}
      handleRemoveTodo={handleRemoveTodo}
      handleNewInputChange={handleNewInputChange}
      newText={newText}
      handleUpdateButton={handleUpdateButton}
      editInputRef={editInputRef}
    />
  );
}

export default TodoItem;
