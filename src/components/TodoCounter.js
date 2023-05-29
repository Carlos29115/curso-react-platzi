import React from "react";

function TodoCounter({completed, total}) {
  return (
  <div>
    <h1 className='containerOne__Tittle'>TODOS</h1>
    <p>Has completado {completed} de {total} TODOS</p>
  </div>
  );
}

export { TodoCounter };
