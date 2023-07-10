import React from "react";
import './styles.css'

function TodoList({ children }) {
  return (
    <>
      <ul className="containerTwo__TodoList">{children}</ul>
    </>
  );
}

export default TodoList;
