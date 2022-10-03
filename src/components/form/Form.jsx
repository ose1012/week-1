import React from "react";
import { useState } from "react";
import List from "../list/List";
import TodoList from "../../pages/TodoList";
import "./style.css";
import { v4 as uuidv4 } from "uuid";
function Form({ toDos, setToDos }) {
  const merge = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };
  const { v4: uuidv4 } = require("uuid");
  const [toDo, setToDo] = useState("");
  // const [toDos, setToDos] = useState([]);
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const onClick = (event) => {
    event.preventDefault();
    if (toDo.title === "" || toDo.body === "") return;
    console.log(title, body);
    setToDos((prev) => [...prev, merge]);
    setToDo(merge);
  };
  console.log("Form : ", toDos);
  return (
    <>
      <form className="add-form">
        <div className="input-group">
          <label className="form-label">제목</label>
          <input
            type="text"
            name="title"
            className="add-input input-body"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <label className="form-label">내용</label>
          <input
            type="text"
            name="body"
            className="add-input"
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
        </div>
        <button className="add-button" onClick={onClick}>
          추가하기
        </button>
      </form>
      {/* <ul>
        {toDos.map((item) => {
          return (
            <li key={uuidv4()}>
              {item.title}
              {item.body}
            </li>
          );
        })}
      </ul> */}
      <List title={title} body={body} toDos={toDos} setToDos={setToDos} />
    </>
  );
}

export default Form;
