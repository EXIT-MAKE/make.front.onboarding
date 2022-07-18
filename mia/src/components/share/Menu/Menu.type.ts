import { MouseEventHandler } from "react";
import { TodoProps } from "../../todo-list/TodoList.type";

export type MenuPresenterProps = {
  // todo: TodoProps[];
  optionList: string[];
  menuDrop: boolean;
  handleEditTodo: (data: string) => void;
  handleRemoveTodo: (data: string) => void;
  handleKebabClick: MouseEventHandler<HTMLElement>;
};

export type MenuProps = {
  optionList: string[];
  handleEditTodo: (data: string) => void;
  handleRemoveTodo: (data: string) => void;
};
