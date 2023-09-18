import React from "react";
import'./styles.css'

function TodoCounter({completed, total}) {
  return (
  <div>
    <h1 className='containerOne__Tittle'>TODOS</h1>
    <p className="containerOne__Parrafo">{`${(completed === total && total !==0 ) ? 'Felicidades terminaste todas tus tareas 🥳' : `Has completado ${completed} de ${total} TODOS`}`}</p>
  </div>
  );
}

export { TodoCounter };

