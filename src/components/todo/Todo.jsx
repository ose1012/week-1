import React from "react";
import "./style.css";

function Todo({ toDos, onRemove, id }) {
  const { title, body } = toDos;
  return (
    <div className="todo-container">
      <div>
        <h2 className="todo-title">{title}</h2>
        <div>{body}</div>
      </div>
      <div className="button-set">
        <button className="todo-delete-button button" onClick={onRemove(id)}>
          삭제하기
        </button>
        <button className="todo-complete-button button">완료</button>
      </div>
    </div>
  );
}

export default Todo;
