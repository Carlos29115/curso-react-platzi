import React, { useContext } from "react";
import { TodoContext } from "../../context";

function CreateTodoButton() {
  const {stateModal, setStateModal} = useContext(TodoContext)
  return (
    <button
      className="nes-btn is-primary"
      onClick={() => {
        setStateModal(!stateModal)
      }}
    >
      Añadir tarea
    </button>
  );
}

export { CreateTodoButton };
