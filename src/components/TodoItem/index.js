import React, { useContext } from "react";
import { TodoContext } from "../../context";
import { IconsSVG } from "../IconsSVG";
import "./styles.css";

function TodoItem({ text, completed }) {
  const { todos, setNewListItems, handleChange, DeleteTodo } =
    useContext(TodoContext);

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
          setNewListItems(handleChange(positionTodo, text));
        }}
      >
        <IconsSVG type={"check"} color={"#00EF10"} completed={completed} />
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
          return setNewListItems(DeleteTodo(text));
        }}
      >
        <IconsSVG type={"delete"} color={"red"} />
      </button>
    </li>
  );
}

export default TodoItem;
