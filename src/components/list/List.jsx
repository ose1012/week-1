import React from "react";
import Todo from '../todo/Todo';
import './style.css';
function List(props) {
    return (
      <div className="list-container">
        <h2 className="list-title">Working.. 🔥</h2>
        <div className="list-wrapper">
        <Todo toDos={props.toDos}/>
        </div>
        <h2 className="list-title">Done..! 🎉</h2>
        <div className="list-wrapper">
        <Todo toDos={props.toDos}/>
        </div>
      </div>
    );
  }
  export default List;