import React from "react";
import { useState } from 'react';
import List from '../list/List';
import TodoList from '../pages/TodoList';
import './style.css';
function Form() {
  const [inputs, setInputs] = useState({
    title: '',
    body: ''
  });
  const { title, body } = inputs;
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    const {value, name} = event.target;
    setInputs({
      ...inputs, [name] : value
    });
  };
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
          <input type="text" name="title" className="add-input input-body" onChange={onChange} value={toDo.title} />
          <label className="form-label">내용</label>
          <input type="text" name="body" className="add-input" onChange={onChange} value={toDo.body}/>
        </div>
        <button className="add-button">추가하기</button>
      </form>
        <ul>{toDos.map((item, index) => (<li key={index}>{item}</li>))}</ul>
      </>
    );
  }
  

export default Form;