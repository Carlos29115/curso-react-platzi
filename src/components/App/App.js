import React, { useEffect } from "react";
import "../../layout/layout.css";
import { useLocalStorage } from "../../hooks/localStorage/localStorage";
import AppUI from "./AppUI";

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: false },
//   { text: "Tomar el curso de Intro a ReactJs", completed: true },
//   { text: "Llorar con la llorona", completed: false },
//   { text: "lalalalalaaló", completed: false },
// ];

// let todosItems = JSON.stringify(defaultTodos)
// const dataLocal = localStorage.setItem("TODOS_V1" ,todosItems)

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const { item:todos, newListItems:setNewListItems, loading, error } = useLocalStorage(
    "TODOS_V1",
    []
  );
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  let searchTodo = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  function handleChange(id, todoText) {
    const todoListOne = {
      ...todos.filter((oldTodo) => oldTodo.text === todoText),
    }[0];
    const todoListTwo = {
      text: todoListOne.text,
      completed: !todoListOne.completed,
    };
    const todoListThree = [
      ...todos.filter((oldTodo) => oldTodo.text !== todoText),
    ];
    todoListThree.splice(id, 0, todoListTwo);

    return todoListThree;
  }

  function DeleteTodo(todoText) {
    const todoListUpdate = [...todos];
    const positionTodo = todos.findIndex((todo) => todo.text === todoText);
    todoListUpdate.splice(positionTodo, 1);
    return todoListUpdate;
  }

  return (
    <>
      <AppUI
        loading={loading}
        error={error}
        searchValue={searchValue}
        todos={todos}
        setSearchValue={setSearchValue}
        setNewListItems={setNewListItems}
        completedTodos={completedTodos}
        totalTodos={totalTodos}
        searchTodo={searchTodo}
        handleChange={handleChange}
        DeleteTodo={DeleteTodo}
      />
    </>
  );
}

export default App;
