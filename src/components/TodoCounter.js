import React from "react";

function TodoCounter({completed, total}) {
  return (
  <div>
    <h1>TODOS</h1>
    <p>Has completado {completed} de {total} TODOS</p>
  </div>
  );
}

export { TodoCounter };
