import React from "react";
import Todo from "../todo/Todo";
import "./style.css";

function List({ toDos, setToDos }) {
  return (
    <div className="list-container">
      <h2 className="list-title">Working.. 🔥</h2>
      <div className="list-wrapper">
        {toDos
          .filter((todo) => {
            return todo.isDone === false;
          })
          .map((todo) => {
            return <Todo key={todo.id} toDos={todo} />;
          })}
      </div>
      <h2 className="list-title">Done..! 🎉</h2>
      <div className="list-wrapper">
        {toDos
          .filter((todo) => {
            return todo.isDone === true;
          })
          .map((todo) => {
            return <Todo key={todo.id} toDos={todo} />;
          })}
      </div>
    </div>
  );
}
export default List;
