import React from "react";
import "./components/presentationals/layout/layout.css";
import { TodoCounter } from "./components/TodoCounter";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import { TodoSearch } from "./components/TodoSearch";
import { CreateTodoButton } from "./components/CreateTodoButton";

const defaultTodos = [
  { text: "Cortar cebolla", completed: false },
  { text: "Tomar el curso de Intro a ReactJs", completed: true },
  { text: "Llorar con la llorona", completed: false },
  { text: "lalalalalaaló", completed: false },
];

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const [todos, setTodos] = React.useState(defaultTodos);
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchTodo = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });
  const todosCompleted = todos.map((todoCompleted)=> todoCompleted.completed)
  const [estado, setEstado] = React.useState("");
  
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
            {searchTodo.map((todo) => (
              <TodoItem
                text={todo.text}
                completed={todo.completed}
                key={todo.text}
                todos ={todosCompleted}
              />
            ))}
          </TodoList>
        </div>
      </div>
    </>
  );
}

export default App;
