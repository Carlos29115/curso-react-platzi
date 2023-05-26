import React from "react";

function TodoSearch() {
  return (
    <>
      <p className="containerTwo__SubTitulo">Lista de Todo's</p>
      <input
        placeholder="Buscar Cebolla"
        className="containerTwo__TodoSearch nes-input is-success"
      />
    </>
  );
}

export { TodoSearch };
