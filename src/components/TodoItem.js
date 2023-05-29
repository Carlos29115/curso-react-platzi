import React from "react";

function TodoItem({ text, completed }) {
  return (
    <li className='containerTwo__TodoItem nes-container is-dark'>
      <span className={`material-symbols-outlined containerTwo__actions containerTwo__actions--Done ${completed ? 'Icon-check--completed': ''} `}>done</span>
      <p className={`containerTwo__ParrafoTodo ${completed ? 'Parrafo--completed' : ''}`}>{text}</p>
      <span className='material-symbols-outlined containerTwo__actions containerTwo__actions--Delete'>close</span>
    </li>
  );
}

export default TodoItem;
