import React, { useContext } from "react";
import { TodoContext } from "../../context";
import "./styles.css";

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);

  return (
    <>
      <p className="containerTwo__SubTitulo">Lista de Todo's</p>
      <input
        placeholder="Buscar Cebolla"
        value={searchValue}
        className="containerTwo__TodoSearch nes-input is-dark"
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    </>
  );
}

export { TodoSearch };
