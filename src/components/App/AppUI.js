import React from "react";
import { TodoCounter } from "../TodoCounter";
import TodoList from "../TodoList";
import TodoItem from "../TodoItem";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";
import TodosLoading from "../TodosLoading";
import { TodoContext } from "../../context";

function AppUI() {
  return (
    <TodoContext.Consumer>
      {({
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
      }) => (
        <div className="containerPrincipal">
          <div className="container containerOne--textStyle">
            <TodoCounter completed={completedTodos} total={totalTodos} />
            <CreateTodoButton />
          </div>
          <div className="container containerTwo--Styles">
            <TodoSearch
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
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
      )}
    </TodoContext.Consumer>
  );
}

export default AppUI;
