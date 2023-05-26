import React from "react";

function TodoList({ children }) {
  return (
    <>
      <ul className='containerTwo__TodoList'>{children}</ul>
    </>
  );
}

export default TodoList;
