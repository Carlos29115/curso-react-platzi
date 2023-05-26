import "./App.css";
import styles from "./components/presentationals/layout/layout.css";
import { TodoCounter } from "./components/TodoCounter";
import TodoList from "./components/TodoList";
import TodoItem from "./components/TodoItem";
import { TodoSearch } from "./components/TodoSearch";
import { CreateTodoButton } from "./components/CreateTodoButton";

const defaultTodos = [
  {text:'Cortar cebolla', completed:false},
  {text:'Tomar el curso de Intro a ReactJs', completed:true},
  {text:'Llorar con la llorona', completed:true},
  {text:'lalalalalaal', completed:false},
]

function App() {
  return (
  <>
    <div className="containerPrincipal">
      <div className="container containerOne--textStyle">
        <TodoCounter completed={15} total ={20}/>
        <CreateTodoButton/>
      </div>
      <div className="container containerTwo--Styles">
        <TodoSearch/>
        <TodoList>
          {defaultTodos.map(todo =>(
            <TodoItem text={todo.text} completed={todo.completed} key={todo.text}/>
          ))}
        </TodoList>
      </div>
    </div>
  </>
  );
}

export default App;
