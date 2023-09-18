import React from "react";
import { TodoCounter } from "../TodoCounter";
import TodoList from "../TodoList";
import TodoItem from "../TodoItem";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import TodosLoading from "../TodosLoading";
import { TodoContext, TodoProvider } from "../../context";

function AppUI() {
  const {
    loading,
    error,
    searchValue,
    todos,
    setSearchValue,
    setNewListItems,
    totalTodos,
    searchTodo,
    handleChange,
    DeleteTodo,
  } = React.createContext(TodoProvider);
  return (
    <div className="containerPrincipal">
      <div className="container containerOne--textStyle">
        <TodoCounter />
        <CreateTodoButton />
      </div>
      <div className="container containerTwo--Styles">
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        <TodoList>
          {loading && <TodosLoading />}
          {error && <p>Hubo un error al cargar los Todo's</p>}
          {!loading && totalTodos === 0 && <p>Crea tu primer Todo 📋</p>}
          {searchTodo.map((todo) => {
            return (
              <TodoItem
                text={todo.text}
                completed={todo.completed}
                key={todo.text}
                todos={todos}
                setTodo={setNewListItems}
                handleChange={handleChange}
                DeleteTodo={DeleteTodo}
              />
            );
          })}
        </TodoList>
      </div>
    </div>
  );
}

export default AppUI;
