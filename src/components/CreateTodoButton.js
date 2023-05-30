import React from "react";

function CreateTodoButton() {
  return (
    <button
      className="nes-btn is-primary"
      onClick={() => {
        console.log("Has hecho click");
      }}
    >
      Añadir tarea
    </button>
  );
}

export { CreateTodoButton };
