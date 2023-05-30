import React from "react";

function TodoList({ children }) {
  return (
    <>
      <ul className='containerTwo__TodoList' onClick={(e)=>{console.log(e)}}>{children}</ul>
    </>
  );
}

export default TodoList;
