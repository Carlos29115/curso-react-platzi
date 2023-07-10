import React from "react";

function useLocalStorage(nameItem, valueItem) {
  let dataLocal = localStorage.getItem(nameItem);
  if (!dataLocal) {
    dataLocal = valueItem;
  } else {
    dataLocal = JSON.parse(dataLocal);
  }
  const [item, setItem] = React.useState(dataLocal);

  const newListItems = (list) => {
    const newList = JSON.stringify(list);
    localStorage.setItem(nameItem, newList);
    setItem(list);
  };
  return [item, newListItems];
}

export { useLocalStorage };
