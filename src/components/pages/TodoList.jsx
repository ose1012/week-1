import React, { useState } from "react";
import Header from "./../../components/header/Header";
import Form from "./../../components/form/Form";
import List from "./../../components/list/List";
import Layout from "./../../components/layout/Layout";
const TodoList = () =>{
    return (
        <Layout>
            <Header />
            <Form />
            <List />
        </Layout>
    )
}

export default TodoList;