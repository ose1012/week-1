import React from "react";
import Todo from "../todo/Todo";
import "./style.css";
function List({ toDos, setTodos }) {
  console.log("List : ", toDos);
  return (
    <div className="list-container">
      <h2 className="list-title">Working.. 🔥</h2>
      <div className="list-wrapper">
        <Todo toDos={toDos && toDos[0].title} />
      </div>
      <h2 className="list-title">Done..! 🎉</h2>
      <div className="list-wrapper">
        <Todo toDos={toDos && toDos[0].body} />
      </div>
    </div>
  );
}
export default List;
