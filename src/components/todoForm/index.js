import React, { useContext, useState } from "react";
import { TodoContext } from "../../context";

const TodoForm = () => {
  const [closeModals, setCloseModals] = useState(false);
  const [newTodoValue, setNewTodoValue] = useState("");
  const { stateModal, setStateModal, loading, addTodos } =
    useContext(TodoContext);
  const closeModal = () => {
    setCloseModals(!closeModals);
    setTimeout(() => {
      setStateModal((value) => !value);
    }, 300);
  };
  const onSubmit = (event) => {
    event.preventDefault();

    try {
      addTodos(newTodoValue);
      closeModal();
    } catch (error) {
      console.log(error);
    }
    // console.log(event.nativeEvent.target[0].value)
  };
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  return (
    <div className={`modal__box ${stateModal ? "modal__box__open" : ""}`}>
      <form
        className={`modal__form ${closeModals ? "modal__form__close" : ""}`}
        onSubmit={onSubmit}
      >
        <label htmlFor={"newTodo"}>Agrega otro todo</label>
        <input
          id="newTodo"
          className="nes-input is-dark modal-input"
          placeholder="Nuevo todo"
          value={newTodoValue}
          onChange={onChange}
          required
        />
        <div className="modal__box--buttons">
          <button
            className="nes-btn modal__buttons"
            onClick={closeModal}
            type="button"
          >
            Cancelar
          </button>
          <button className="nes-btn is-primary modal__buttons" type="submit">
            Agregar
          </button>
        </div>
      </form>
      <span onClick={closeModal}></span>
    </div>
  );
};

export default TodoForm;
