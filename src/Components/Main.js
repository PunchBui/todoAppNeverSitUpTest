import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import List from "./List";
import axios from 'axios'

const Main = props => {
    // console.log(props)
    const [todoList,setTodoList] = useState([])
    useEffect(() => {
        getAllTodo()
    }, [todoList]);

    const url = "https://candidate.neversitup.com/todo/todos"
    const Token = "Bearer " + props.token
    const getAllTodo = () => {
        axios({
            "url": url,
            "method": "GET",
            "headers": {
                "Authorization": Token,
            }})
            .then(function (response) {
                // console.log(response)
                setTodoList(response.data)
            })
            .catch(function (error) {
                // console.log(error)
            });
    }
    const createHandler = (e) => {
        e.preventDefault()
        props.callbackIsModalOpen(true)
        props.callbackModalType("create")
    }
    return (
        <Fragment>
            <Wrapper>
                <List 
                    todoList={todoList}
                    callbackIsModalOpen = {props.callbackIsModalOpen}
                    callbackModalType = {props.callbackModalType}
                />
                <CreateBtn onClick={(e) => createHandler(e)}>Create</CreateBtn>
            </Wrapper>
        </Fragment>
    );
};

export default Main;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
`;
const CreateBtn = styled.button`

`;