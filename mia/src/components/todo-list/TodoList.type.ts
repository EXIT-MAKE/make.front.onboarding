import { ChangeEventHandler } from "react";

export type TodosListPresenterTypes = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  handleInputChange: ChangeEventHandler<HTMLElement>;
  handleAddTodo: () => void;
};

export type TodosProps = {
  todos: TodoProps[];
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
};

export type TodoProps = {
  index: number;
  content: string;
};
