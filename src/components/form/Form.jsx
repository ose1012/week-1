import React from "react";
import { useState } from "react";
import "./style.css";
import { useRef } from "react";
function Form({ toDos, setToDos }) {
  const merge = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const inputTitleRef = useRef();
  const inputBodyRef = useRef();
  const onSubmit = (event) => {
    event.preventDefault();
    inputTitleRef.current.value = "";
    inputBodyRef.current.value = "";
    setToDos((prev) => [...prev, { ...merge, id: Date.now(), title, body }]);
  };
  return (
    <>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="input-group">
          <label className="form-label">제목</label>
          <input
            ref={inputTitleRef}
            required
            type="text"
            name="title"
            className="add-input input-body"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <label className="form-label">내용</label>
          <input
            ref={inputBodyRef}
            required
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
