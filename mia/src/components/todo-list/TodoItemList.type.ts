import { ChangeEventHandler } from "react";

export type TodoListPresenterTypes = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  handleInputChange: ChangeEventHandler<HTMLElement>;
  handleAddTodo: () => void;
  todoList: TodoProps[];
  setTodoList: React.Dispatch<React.SetStateAction<TodoProps[]>>;
};

// export type TodoListProps = {
//   todoList: TodoProps[];
//   setTodoList: React.Dispatch<React.SetStateAction<TodoProps[]>>;
// };

export type TodoProps = {
  index: number;
  content: string;
};
