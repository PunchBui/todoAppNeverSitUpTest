import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import List from "./List";
import axios from 'axios'

const Main = props => {
    const [todoList,setTodoList] = useState({})
    // console.log(props);
    useEffect(() => {
        getAllTodo()
    }, []);
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
                console.log(response)
                setTodoList(response.data)
            })
            .catch(function (error) {
                console.log(error)
            });
    }
    const createHandler = () => {
    }
    return (
        <Fragment>
            <Wrapper>
                <List />
                <CreateBtn onClick={createHandler}>Create</CreateBtn>
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