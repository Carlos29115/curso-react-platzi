import React from "react";

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState('');
  console.log(searchValue);
  return (
    <>
      <p className="containerTwo__SubTitulo">Lista de Todo's</p>
      <input
        placeholder="Buscar Cebolla"
        value={searchValue}
        className="containerTwo__TodoSearch nes-input is-success"
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
    </>
  );
}

export { TodoSearch };
