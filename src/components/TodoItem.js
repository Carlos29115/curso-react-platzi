import React from "react";

function TodoItem({ text, completed, todos, handleChange, setTodo }) {
  return (
    <li className="containerTwo__TodoItem nes-container is-dark">
      <button
        className="containerTwo__ButtonDone"
        onClick={() => {
          const positionTodo = todos
            .map((miniTodo) => miniTodo.text)
            .indexOf(text);
          setTodo(handleChange(positionTodo, text));
        }}
      >
        <span
          className={`material-symbols-outlined containerTwo__actions containerTwo__actions--Done ${
            completed ? "Icon-check--completed" : ""
          } `}
        >
          done
        </span>
      </button>
      <p
        className={`containerTwo__ParrafoTodo ${
          completed ? "Parrafo--completed" : ""
        }`}
      >
        {text}
      </p>
      <span className="material-symbols-outlined containerTwo__actions containerTwo__actions--Delete">
        close
      </span>
    </li>
  );
}

export default TodoItem;
