import React from "react";
import "./components/presentationals/layout/layout.css";
import { TodoCounter } from "./components/TodoCounter";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import { TodoSearch } from "./components/TodoSearch";
import { CreateTodoButton } from "./components/CreateTodoButton";

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: false },
//   { text: "Tomar el curso de Intro a ReactJs", completed: true },
//   { text: "Llorar con la llorona", completed: false },
//   { text: "lalalalalaaló", completed: false },
// ];

// let todosItems = JSON.stringify(defaultTodos)
// const dataLocal = localStorage.setItem("TODOSITEM_V1" ,todosItems)
let dataLocal = localStorage.getItem("TODOSITEM_V1")
if (!dataLocal){
  dataLocal = []
}else{
  // JSON.parse(dataLocal)
  dataLocal= JSON.parse(dataLocal)
}

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const [todos, setTodos] = React.useState(dataLocal);
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  let searchTodo = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });
  
  function newListTodos (list){
    const newList = JSON.stringify(list)
    localStorage.setItem("TODOSITEM_V1" ,newList)
    setTodos(list)
}

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
            {searchTodo.map((todo) => {
              return (
                <TodoItem
                  text={todo.text}
                  completed={todo.completed}
                  key={todo.text}
                  todos={todos}
                  setTodo={newListTodos}
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

export default App;
