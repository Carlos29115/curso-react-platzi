import React from "react";

function TodoItem({text,completed}) {
  return (
    (
      <li className='containerTwo__TodoItem nes-container is-dark'>
        <span>V</span>
        <p>{text}</p>
        <span>X</span>
      </li>
    )
  );
}

export default TodoItem;
