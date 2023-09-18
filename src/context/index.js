import React from "react";
import { useLocalStorage } from "../hooks/localStorage/localStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const [searchValue, setSearchValue] = React.useState("");
  const {
    item: todos,
    newListItems: setNewListItems,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
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
    <TodoContext.Provider
      value={{
        loading,
        error,
        searchValue,
        todos,
        setSearchValue,
        setNewListItems,
        completedTodos,
        totalTodos,
        searchTodo,
        handleChange,
        DeleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
