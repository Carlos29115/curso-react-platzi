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
        <IconsSVG type={'check'} color={'green'} completed={completed}/>
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
        <IconsSVG type={'delete'} color={'red'}/>
      </button>
    </li>
  );
}

export default TodoItem;
