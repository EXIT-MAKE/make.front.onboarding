import React from "react";
import Header from "./components/header/Header";
import TodoItemList from "./components/todo-list/TodoItemList";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <TodoItemList />
      </ThemeProvider>
    </>
  );
}

export default App;
