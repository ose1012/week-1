import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleMinus,
  faCircleCheck,
  faBan,
} from "@fortawesome/free-solid-svg-icons";
function Todo({ toDos, onRemove, onEdit, id }) {
  const { title, body } = toDos;
  return (
    <div className="todo-container">
      <div className="button-set">
        <button className="todo-delete-button button" onClick={onRemove(id)}>
          <FontAwesomeIcon icon={faCircleMinus} className="delete-logo" />
        </button>
        <button
          className="todo-complete-button button"
          onClick={() => onEdit(id)}
        >
          {toDos.isDone ? (
            <FontAwesomeIcon icon={faBan} className="cancel-logo" />
          ) : (
            <FontAwesomeIcon icon={faCircleCheck} className="done-logo" />
          )}
        </button>
      </div>
      <div>
        <h2 className="todo-title">{title}</h2>
        <div>{body}</div>
      </div>
    </div>
  );
}

export default Todo;
