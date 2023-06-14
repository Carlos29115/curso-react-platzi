import React from "react";
import { IconsSVG } from "./IconsSVG";

function TodoItem({
  text,
  completed,
  todos,
  handleChange,
  setTodo,
  DeleteTodo,
}) {
  return (
    <li
      className={`containerTwo__TodoItem ${
        completed ? "containerTwo__TodoItem--completed" : ""
      } nes-container is-dark with-title`}
    >
      <p
        className={`title ${
          completed
            ? "containerTwo__Tittle--Done"
            : "containerTwo__Tittle--Unfinished"
        }`}
      >{`${completed ? "Done" : "Unfinished"} `}</p>
      <button
        className="containerTwo__ButtonActions"
        onClick={() => {
          const positionTodo = todos.findIndex((todo) => todo.text === text);
          setTodo(handleChange(positionTodo, text));
        }}
      >
        <IconsSVG type={'check'}/>
        {/* <span
          className={`material-symbols-outlined containerTwo__actions containerTwo__actions--Done ${
            completed ? "Icon-check--completed" : ""
          } `}
        >
          done
        </span> */}
      </button>
      <p
        className={`containerTwo__ParrafoTodo ${
          completed ? "Parrafo--completed" : ""
        }`}
      >
        {text}
      </p>
      <button
        className="containerTwo__ButtonActions"
        onClick={() => {
          return setTodo(DeleteTodo(text));
        }}
      >
        <IconsSVG type={'delete'}/>
        {/* <span className="material-symbols-outlined containerTwo__actions containerTwo__actions--Delete">
          close
        </span> */}
      </button>
    </li>
  );
}

export default TodoItem;
