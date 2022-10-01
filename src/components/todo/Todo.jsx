import React from "react";
import "./style.css";

function Todo() {
  return (
    <div className="todo-container">
      <div>
        <h2 className="todo-title"></h2>
        <div></div>
      </div>
      <div className="button-set">
        <button
          className="todo-delete-button button"
        >
          삭제하기
        </button>
        <button
          className="todo-complete-button button"
        >
          완료
        </button>
      </div>
    </div>
  );
}

export default Todo;
