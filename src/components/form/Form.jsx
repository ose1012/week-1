import React from "react";
import { useState } from "react";
import "./style.css";
function Form({ toDos, setToDos }) {
  const merge = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const onSubmit = (event) => {
    event.preventDefault();
    if (title === "" || body === "") {
      alert("제목과 내용을 입력해주세요!");
      return;
    }
    setToDos((prev) => [...prev, { ...merge, id: Date.now(), title, body }]);
    setTitle("");
    setBody("");
  };
  console.log(title, body);
  console.log("Form : ", toDos);
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
        <button className="add-button" type="submit">
          추가하기
        </button>
      </form>
    </>
  );
}

export default Form;
