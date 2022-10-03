import React from "react";
import Todo from "../todo/Todo";
import "./style.css";
function List({ toDos, setTodos }) {
  console.log("List : ", toDos);
  return (
    <div className="list-container">
      <h2 className="list-title">Working.. 🔥</h2>
      <div className="list-wrapper">
        {toDos
          .filter((todo) => {
            return todo.isDone === false;
          })
          .map((todo) => {
            console.log("ToDo : ", todo);
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
            return <Todo toDos={todo} />;
          })}
      </div>
    </div>
  );
}
export default List;
