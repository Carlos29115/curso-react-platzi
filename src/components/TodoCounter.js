import React from "react";

function TodoCounter({completed, total}) {
  return (
  <div>
    <h1 className='containerOne__Tittle'>TODOS</h1>
    <p className="containerOne__Parrafo">{`${completed === total ? 'Felicidades terminaste todas tus tareas 🥳' : `Has completado ${completed} de ${total} TODOS`}`}</p>
  </div>
  );
}

export { TodoCounter };

