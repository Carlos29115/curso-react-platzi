import React from "react";
import "../../layout/layout.css";
import { useLocalStorage } from "../../hooks/localStorage/localStorage";
import AppUI from "./AppUI";
import { TodoProvider } from "../../context";

function App() {
  return (
    <>
      <TodoProvider>
        <AppUI />
      </TodoProvider>
    </>
  );
}

export default App;
