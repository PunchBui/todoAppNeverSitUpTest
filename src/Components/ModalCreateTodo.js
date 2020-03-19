import React, { Fragment, useState } from "react";
import styled from "styled-components";
import axios from 'axios'

const ModalCreateTodo = props => {
    // console.log(props)
    const [title, setTitle] = useState("")
    const [des, setDes] = useState("")
    const url = "https://candidate.neversitup.com/todo/todos"
    const Token = "Bearer " + props.token
    const createTodo = () => {
        axios({
            "url": url,
            "method": "POST",
            "headers": {
                "Authorization": Token
            },
            "data": { "title": title, "description": des }
        })
            .then(function (response) {
                // console.log(response)
                props.callbackIsModalOpen(false)
            })
            .catch(function (error) {
                // console.log(error)
            });
    }
    const submitHandler = (e) => {
        e.preventDefault()
        createTodo()
    }
    const cancelHandler = (e) => {
        e.preventDefault()
        props.callbackIsModalOpen(false)
    }
    return (
        <CreateContainner onSubmit={e => submitHandler(e)}>
            <span>Title</span>
            <input
                value={title}
                type="text"
                placeholder="Title"
                onChange={e => setTitle(e.target.value)}
            />
            <span>Description</span>
            <input
                value={des}
                type="text"
                placeholder="Description"
                onChange={e => setDes(e.target.value)}
            />
            <ButtonContainner>
                <button onClick={e => cancelHandler(e)}>Cancel</button>
                <input type="submit" value="Create" />
            </ButtonContainner>
        </CreateContainner>
    );
};

export default ModalCreateTodo;

const CreateContainner = styled.form`
display: flex;
flex-direction: column;
justify-content:center;
/* align-items: center; */
background-color: #FFFFFF;
`;

const ButtonContainner = styled.div`
display: flex;
justify-content:center;
`;