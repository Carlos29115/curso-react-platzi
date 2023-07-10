import React from "react";
import { TodoCounter } from "../TodoCounter";
import TodoList from "../TodoList";
import TodoItem from "../TodoItem";
import { TodoSearch } from "../TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton";

function AppUI({
  searchValue,
  todos,
  setSearchValue,
  setNewListItems,
  completedTodos,
  totalTodos,
  searchTodo,
  handleChange,
  DeleteTodo,
}) {
  return (
    <>
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
            {console.log(todos)}
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
    </>
  );
}

export default AppUI;
