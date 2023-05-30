import React from "react";
import "./components/presentationals/layout/layout.css";
import { TodoCounter } from "./components/TodoCounter";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import { TodoSearch } from "./components/TodoSearch";
import { CreateTodoButton } from "./components/CreateTodoButton";

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el curso de Intro a ReactJs", completed: true },
  { text: "Llorar con la llorona", completed: true },
  { text: "lalalalalaal", completed: false },
];

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const [todos, setTodos] = React.useState(defaultTodos);
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchTodo = todos.filter((todo) => todo.text.includes(searchValue));
  console.log(searchTodo)
  return (
    <>
      <div className="containerPrincipal">
        <div className="container containerOne--textStyle">
          <TodoCounter
            completed={completedTodos}
            total={totalTodos}
          />
          <CreateTodoButton />
        </div>
        <div className="container containerTwo--Styles">
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
          <TodoList>
            {defaultTodos.map((todo) => (
              <TodoItem
                text={todo.text}
                completed={todo.completed}
                key={todo.text}
              />
            ))}
          </TodoList>
        </div>
      </div>
    </>
  );
}

export default App;
