import React from "react";
import Header from "./components/header/Header";
import TodoList from "./components/todo-list/TodoList";
import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <TodoList />
      </ThemeProvider>
    </>
  );
}

export default App;
