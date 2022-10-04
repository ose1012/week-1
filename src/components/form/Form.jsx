import React from "react";
import { useState } from "react";
import "./style.css";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
// React는 사용자 인터페이스를 구축하기 위한 선언적이고 효율적이며 유연한 JavaScript 라이브러리입니다.
// "컴포넌트" 라고 불리는 작고 고립된 코드의 파편을 이용하여 복잡한 UI를 구성하도록 돕습니다.

// TodoList에서 보내준 값을 받는 우체통이라고 생각하면 됩니다.
// 여기선 toDos와 setToDos라는 값을 받아오고 있습니다.

function Form({ toDos, setToDos }) {
  const merge = {
    id: 0,
    title: "",
    body: "",
    isDone: false,
  };
  // Hooks는 리액트 v16.8에 새로 도입된 기능으로 함수형 컴포넌트에서도 상태관리를 할 수 있는 useState,
  // 렌더링 직후 작업을 설정하는 useEffect등의 기능을 제공하여 기존의 함수형 컴포넌트에서 할 수 없었던 다양한 작업을 할 수 있게 해줍니다.

  // useState는 현재의 state 값과 이 값을 업데이트 하는 함수를 쌍으로 제공합니다.

  const [title, setTitle] = useState(); // title 을 받아오기 위해 useState를 사용합니다.
  const [body, setBody] = useState(); // body 를 받아오기 위해 useState를 사용합니다.

  // JavaScript 를 사용 할 때에는, 우리가 특정 DOM 을 선택해야 하는 상황에 getElementById,
  // querySelector 같은 DOM Selector 함수를 사용해서 DOM 을 선택합니다.

  // 리액트에서는 ref 라는 것을 사용합니다. 함수형 컴포넌트에서 ref 를 사용할 때에는 useRef 라는 Hook 함수를 사용합니다.

  const inputTitleRef = useRef(); // title
  const inputBodyRef = useRef(); // body

  const onSubmit = (event) => {
    // onSubmit 화살표 함수를 이용
    event.preventDefault();
    // 어떤 이벤트를 명시적으로 처리하지 않은 경우, 해당 이벤트에 대한 사용자 에이전트의 기본 동작을 실행하지 않도록 지정합니다.
    // (ex. submit은 버튼이 클릭되면 새로고침 되는데 이 것을 막아주는 것)
    inputTitleRef.current.value = ""; // title 이 입력되면 input 창을 비워주는 것
    inputBodyRef.current.value = ""; // body 가 입력되면 input 창을 비워주는 것
    // merge를 새로운 객체로 복사해주고 뒤에 id, title, body가 따라오게 만들어 줍니다.
    // const merge = {
    //   id: Date.now(),
    //   title: title,
    //   body: body,
    //   isDone: false,
    // };
    // 이와 같습니다.
    // 그것을 prev 라는 새로운 배열로 복사해줍니다.
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
          <FontAwesomeIcon icon={faPlus} className="plus-logo" />
        </button>
      </form>
    </>
  );
}

export default Form;
