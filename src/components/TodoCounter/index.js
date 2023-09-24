import React, { useContext } from "react";
import { TodoContext } from "../../context";
import "./styles.css";

function TodoCounter() {
  const { completedTodos, totalTodos } = useContext(TodoContext);
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
