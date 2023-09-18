import React from "react";
import "./styles.css";
import { IconsSVG } from "../IconsSVG";

const TodosLoading = () => {
  const TodoComponent = () => {
    return (
      <li
        className={`containerTwo__TodoItem nes-container is-dark with-title loading__Border`}
      >
        <p className={`title loading__Tittle`}>Loading</p>
        <button className="containerTwo__ButtonActions">
          <IconsSVG type={"check"} completed={true} loading={true} />
        </button>
        <div className="LoadingList">
          <div className="loadingText loadingText__titule"></div>
          <div className="loadingText loadingText__text"></div>
        </div>
        <button className="containerTwo__ButtonActions">
          <IconsSVG type={"delete"} loading={true} />
        </button>
      </li>
    );
  };

  const amountComponent = [];

  for (let i = 0; i < 3; i++) {
    amountComponent.push(<TodoComponent key={i} />);
  }
  return <>{amountComponent}</>;
};

export default TodosLoading;
