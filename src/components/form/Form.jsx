import React from "react";
import { useState } from "react";
import List from "../list/List";
import TodoList from "../../pages/TodoList";
import "./style.css";
function Form() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    // if (toDo === "") {
    //   return;
    // }
    // setToDos((currentArray) => [toDo, ...currentArray]);
    // setToDo("");
    const merge = {
      id: 0,
      title: title,
      body: body,
      isDone: false,
    };
    console.log(title, body);
    setToDos((prev) => [...prev, merge]);
  };
  return (
    <>
      <form className="add-form" onSubmit={onSubmit}>
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
        <button className="add-button">추가하기</button>
      </form>
      <ul>
        {toDos.map((item) => {
          return (
            <li key={item.id}>
              {item.title}
              {item.body}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Form;
