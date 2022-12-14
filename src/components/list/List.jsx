import React from "react";
import Todo from "../todo/Todo";
import "./style.css";

function List({ toDos, setToDos }) {
  // 삭제하기 구현, 고차함수 사용(좀 더 공부하기)
  const onRemove = (id) => () => {
    setToDos((toDos) => toDos.filter((todo) => todo.id !== id));
  };
  const onEdit = (id) => {
    setToDos((toDos) =>
      toDos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  return (
    <div className="list-container">
      <div className="list-wrap">
        <h2 className="list-title working">🔥WORKING🔥</h2>
        <div className="list-wrapper">
          {toDos
            .filter((todo) => {
              return todo.isDone === false;
            })
            .map((todo) => {
              return (
                <Todo
                  key={todo.id}
                  id={todo.id}
                  toDos={todo}
                  onRemove={onRemove}
                  onEdit={onEdit}
                />
              );
            })}
        </div>
      </div>
      <div className="list-wrap">
        <h2 className="list-title done">✨DONE✨</h2>
        <div className="list-wrapper">
          {toDos
            .filter((todo) => {
              return todo.isDone === true;
            })
            .map((todo) => {
              return (
                <Todo
                  key={todo.id}
                  id={todo.id}
                  toDos={todo}
                  onRemove={onRemove}
                  onEdit={onEdit}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
export default List;
