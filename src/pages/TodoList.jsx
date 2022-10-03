import Header from "../components/header/Header";
import Form from "../components/form/Form";
import List from "../components/list/List";
import Layout from "../components/layout/Layout";
import { useState } from "react";
const TodoList = () => {
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
      <Form setToDos={setToDos} toDos={toDos} />
      <List setToDos={setToDos} toDos={toDos} />
    </Layout>
  );
};

export default TodoList;
