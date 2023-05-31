import React from "react";

function TodoItem({ text, completed, setTodos, todos }) {
  return (
    <li className="containerTwo__TodoItem nes-container is-dark">
      <button className="containerTwo__CreateTodoButton" onClick={()=>{
        
        console.log(todos)
      }}>
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
