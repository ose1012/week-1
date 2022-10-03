import React from "react";
import Todo from "../todo/Todo";
import "./style.css";

function List({ toDos, setToDos }) {
  const onRemove = (id) => () => {
    setToDos((toDos) => toDos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="list-container">
      <h2 className="list-title">Working.. 🔥</h2>
      <div className="list-wrapper">
        {toDos
          .filter((todo) => {
            return todo.isDone === false;
          })
          .map((todo) => {
            return (
              <Todo
                key={todo.id}
                id={todo.id}
                toDos={todo}
                onRemove={onRemove}
              />
            );
          })}
      </div>
      <h2 className="list-title">Done..! 🎉</h2>
      <div className="list-wrapper">
        {toDos
          .filter((todo) => {
            return todo.isDone === true;
          })
          .map((todo) => {
            return (
              <Todo
                key={todo.id}
                id={todo.id}
                toDos={todo}
                onRemove={onRemove}
              />
            );
          })}
      </div>
    </div>
  );
}
export default List;
