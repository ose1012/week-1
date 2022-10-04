import Header from "../components/header/Header";
import Form from "../components/form/Form";
import List from "../components/list/List";
import Layout from "../components/layout/Layout";
import { useState } from "react";
const TodoList = () => {
  // 종종 동일한 데이터에 대한 변경사항을 여러 컴포넌트에 반영해야 할 필요가 있습니다.
  // 이럴 때는 가장 가까운 공통 조상으로 state를 끌어올리는 것이 좋습니다.
  const [toDos, setToDos] = useState([
    {
      id: 1,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: false,
    },
    {
      id: 2,
      title: "리액트 공부하기",
      body: "리액트 기초를 공부해봅시다.",
      isDone: true,
    },
  ]);
  return (
    <Layout>
      <Header />
      {/* 우체국과 우체통이라고 비교해봅니다. 이쪽은 데이터를 보내주는 우체국이라고 생각하면 됩니다. */}
      {/* 각각 Form과 List에서 setToDos와 toDos라는 데이터를 다른 우체통을 향해 보내주고 있습니다. */}
      <Form setToDos={setToDos} toDos={toDos} />
      <List setToDos={setToDos} toDos={toDos} />
    </Layout>
  );
};

export default TodoList;
