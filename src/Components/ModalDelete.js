import React, { Fragment, useState } from "react";
import styled from "styled-components";
import axios from 'axios'

const ModalDelete = props => {
    // console.log(props)
    const url = "https://candidate.neversitup.com/todo/todos/" + props.todoToInteract._id
    const Token = "Bearer " + props.token
    const deleteTodo = () => {
        axios({
            "url": url,
            "method": "DELETE",
            "headers": {
                "Authorization": Token
            },
        })
            .then(function (response) {
                // console.log(response)
                props.getAllTodo()
                props.callbackIsModalOpen(false)
            })
            .catch(function (error) {
                // console.log(error)
            });
    }
    const deleteHandler = (e) => {
        e.preventDefault()
        console.log("deleting")
        deleteTodo()
    }
    const cancelHandler = (e) => {
        e.preventDefault()
        props.callbackIsModalOpen(false)
    }
    return (
        <DeleteContainer>
            <DeleteTitle>Do you really want to delete {props.todoToInteract.title} ?</DeleteTitle>
            <ButtonContainner>
                <button onClick={e => cancelHandler(e)}>Cancel</button>
                <button onClick={e => deleteHandler(e)}>Delete</button>
            </ButtonContainner>
        </DeleteContainer>
    );
};

export default ModalDelete;

const DeleteContainer = styled.div`
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

const DeleteTitle = styled.span`

`;