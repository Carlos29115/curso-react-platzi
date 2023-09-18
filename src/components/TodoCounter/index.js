import React from "react";
import "./styles.css";
import { TodoProvider } from "../../context";

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoProvider);
  return (
    <div>
      <h1 className="containerOne__Tittle">TODOS</h1>
      <p className="containerOne__Parrafo">{`${
        completedTodos === totalTodos && totalTodos !== 0
          ? "Felicidades terminaste todas tus tareas 🥳"
          : `Has completado ${completedTodos} de ${totalTodos} TODOS`
      }`}</p>
    </div>
  );
}

export { TodoCounter };
