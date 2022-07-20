import React, { useState, useEffect, useRef } from "react";
import {
  removeStorageItem,
  setStorageItem,
} from "../../utils/windowLocalStorage";
import TodoItemPresenter from "./TodoItem.presenter";

function TodoItem({ id, todos, todo, setTodos }) {
  const [edit, setEditTodo] = useState<boolean>(false);
  const [newText, setNewText] = useState<string>(
    todos?.content ? todos.content : ""
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

  const handleUpdateButton = () => {
    console.log(todo.index);
    console.log(id);

    const newTodos = todos.map((todo) => ({
      ...todo,
      content: todo.index === id ? newText : todo.content,
    }));

    setTodos(newTodos);
    setStorageItem("content", newTodos);
    setEditTodo(false);
  };

  // ----- 삭제
  const handleRemoveTodo = (id) => {
    const result = todos.filter((todo) => {
      return todo.index !== id;
    });

    setTodos(result);
    removeStorageItem("content");
    setStorageItem("content", result);
  };

  const handleNewInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewText(e.target.value);
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
