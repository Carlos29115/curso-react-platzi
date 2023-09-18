import React, { useEffect } from "react";

function useLocalStorage(nameItem, valueItem) {
  const [item, setItem] = React.useState(valueItem);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        let dataLocal = localStorage.getItem(nameItem);
        if (!dataLocal) {
          dataLocal = valueItem;
        } else {
          dataLocal = JSON.parse(dataLocal);
        }
        setItem(dataLocal);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
        console.log(error);
      }
    }, 2000);
  }, []);

  const newListItems = (list) => {
    const newList = JSON.stringify(list);
    localStorage.setItem(nameItem, newList);
    setItem(list);
  };
  return { item, newListItems, loading, error };
}

export { useLocalStorage };

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: false },
//   { text: "Tomar el curso de Intro a ReactJs", completed: true },
//   { text: "Llorar con la llorona", completed: false },
//   { text: "lalalalalaaló", completed: false },
// ];

// let todosItems = JSON.stringify(defaultTodos)
// const dataLocal = localStorage.setItem("TODOS_V1" ,todosItems)