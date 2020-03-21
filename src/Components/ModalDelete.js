import React, { Fragment, useState } from "react";
import styled from "styled-components";
import {deleteTodo as apiDeleteTodo} from '../Api'

const ModalDelete = props => {
    // console.log(props)
    const Token = "Bearer " + props.token
    const deleteTodo = () => {
        apiDeleteTodo(Token,props.todoToInteract._id)
        .then((response) => {
            // console.log(response)
            props.getAllTodo()
            props.callbackIsModalOpen(false)
        })
        .catch((error) => {
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
                <Cancel onClick={e => cancelHandler(e)}>Cancel</Cancel>
                <Submit onClick={e => deleteHandler(e)}>Delete</Submit>
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
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
width: 40%;
border-radius: 5px;
padding: .5em;
@media only screen and (max-width: 768px){
    width: 90%;
    border-radius: 5px;
}
`;

const ButtonContainner = styled.div`
display: flex;
justify-content:center;
`;

const DeleteTitle = styled.span`
font-size: 2rem;
font-weight: bold;
overflow-wrap: break-word;
margin-bottom: .1em;
`;

const Cancel = styled.button`
width: 25%;
background: #f71b1b;
border: none;
color: #e0e0e0;
font-weight: bold;
cursor: pointer;
font-size: 1.5rem;
padding: 0.3em 0 0.3em 0;
border-radius: 5px 0 0 5px;
&:hover {
    box-shadow:  0 6px 20px 0 rgba(0, 0, 0, 0.19),0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
&:focus {
    border: none;
}
@media only screen and (max-width: 768px){
    width: 50%;
}
`;

const Submit = styled.button`
width: 25%;
background: #9e00ff;
border: none;
color: #e0e0e0;
font-weight: bold;
cursor: pointer;
font-size: 1.5rem;
padding: 0.3em 0 0.3em 0;
border-radius: 0 5px 5px 0;
&:hover {
box-shadow:  0 6px 20px 0 rgba(0, 0, 0, 0.19),0 4px 8px 0 rgba(0, 0, 0, 0.2);

}
&:focus {
    border: none;
}
@media only screen and (max-width: 768px){
    width: 50%;
}
`;