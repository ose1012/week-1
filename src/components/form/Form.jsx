import React from "react";
import { useState } from 'react';
import List from '../list/List';
import TodoList from '../pages/TodoList';
import './style.css';
function Form() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if( toDo === ""){
      return;
    }
    setToDo("");
    setToDos((currentArray) => [toDo, ...currentArray]);
  };
    return (
      <><form className="add-form" onSubmit={onSubmit}>
        <div className="input-group">
          <label className="form-label">제목</label>
          <input type="text" name="title" className="add-input input-body" />
          <label className="form-label">내용</label>
          <input type="text" name="body" className="add-input" onChange={onChange} value={toDo} />
        </div>
        <button className="add-button">추가하기</button>
      </form>
        <ul>{toDos.map((item, index) => (<li key={index}>{item}</li>))}</ul>
      </>
    );
  }

export default Form;