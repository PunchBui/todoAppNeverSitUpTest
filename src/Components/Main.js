import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import List from "./List";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const Main = props => {
    // console.log(props)
    const history = useHistory()
    useEffect(() => {
        checkingAuthorize()
    }, []);
    const checkingAuthorize = () => {
        if(props.authorized){
            props.getAllTodo()
        }else{
            history.push("/login")
        }
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
                    todoList={props.todoList}
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
background-color: #FFFFFF;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
width: 50%;
border-radius: 5px;
@media only screen and (max-width: 768px){
    width: 90%;
    border-radius: 5px;
}
`;
const CreateBtn = styled.button`
width: 97%;
background: #9e00ff;
border: none;
color: #e0e0e0;
font-weight: bold;
cursor: pointer;
font-size: 1.5rem;
margin: .5em;
padding: 0.3em 0 0.3em 0;
border-radius: 25px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
&:hover {

}
&:focus {
    border: none;
}
`;