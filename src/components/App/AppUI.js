import React, { useContext } from "react";
import { TodoContext } from "../../context";
import { CreateTodoButton } from "../CreateTodoButton";
import Modal from "../Modal";
import { TodoCounter } from "../TodoCounter";
import TodoItem from "../TodoItem";
import TodoList from "../TodoList";
import { TodoSearch } from "../TodoSearch";
import TodosLoading from "../TodosLoading";
import TodoForm from "../todoForm";

function AppUI() {
  const { loading, error, totalTodos, searchTodo, stateModal } =
    useContext(TodoContext);
  return (
    <div className="containerPrincipal">
      <div className="container containerOne--textStyle">
        <TodoCounter />
        <CreateTodoButton />
        {stateModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}
      </div>
      <div className="container containerTwo--Styles">
        <TodoSearch />
        <TodoList>
          {/* Estado de carga */}
          {loading && <TodosLoading />}
          {/* Estado de error */}
          {error && <p>Hubo un error al cargar los Todo's</p>}
          {/* Estado de 0 Todo's */}
          {!loading && totalTodos === 0 && <p>Crea tu primer Todo 📋</p>}

          {searchTodo.map((todo) => {
            return (
              <TodoItem
                text={todo.text}
                completed={todo.completed}
                key={todo.text}
              />
            );
          })}
        </TodoList>
      </div>
    </div>
  );
}

export default AppUI;
