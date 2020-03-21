import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import {createTodo as apiCreateTodo,updateTodo as apiUpdateTodo} from '../Api'

const ModalInteractTodo = props => {
    // console.log(props)
    const [title, setTitle] = useState("")
    const [des, setDes] = useState("")
    const [blankTitle, setBlankTitle] = useState(false)
    useEffect(() => {
        settingModal()
        console.log(props)
    }, [props.todoToInteract]);
    const header = props.modalType == "create" ? "Create new todo" : "Update todo"
    const submitType = props.modalType == "create" ? "Create" : "Update"
    const Token = "Bearer " + props.token
    const clearInput = () => {
        setTitle("")
        setDes("")
    }
    const createTodo = () => {
        apiCreateTodo(Token,title,des)
        .then(function (response) {
            // console.log(response)
            props.getAllTodo()
            clearInput()
            props.callbackIsModalOpen(false)
        })
        .catch(function (error) {
            // console.log(error)
        });
    }
    const updateTodo = () => {
        apiUpdateTodo(Token,title,des,props.todoToInteract._id)
        .then(function (response) {
            // console.log(response)
            props.getAllTodo()
            clearInput()
            props.callbackIsModalOpen(false)
        })
        .catch(function (error) {
            // console.log(error)
        });
    }
    const settingModal = () => {
        setBlankTitle(false)
        if(props.modalType == "update"){
            // console.log(props)
            setTitle(props.todoToInteract.title)
            setDes(props.todoToInteract.description)
        }
    }
    const submitHandler = (e) => {
        e.preventDefault()
        if(title===""){
            setBlankTitle(true)
        }else{
            if(props.modalType == "create"){
                createTodo()
            }else if(props.modalType == "update"){
                updateTodo()
            }
        }
    }
    const cancelHandler = (e) => {
        e.preventDefault()
        clearInput()
        props.callbackIsModalOpen(false)
    }
    const clearBlank = () => {
        if(blankTitle){
            setBlankTitle(false)
        }
    }
    return (
        <CreateContainner onSubmit={e => submitHandler(e)}>
            <HeadText>{header}</HeadText>
            <Label>Title</Label>
            <ErrorTextTitle blankTitle={blankTitle}>Title can't be blank.</ErrorTextTitle>
            <InputModal
                value={title || ""}
                type="text"
                placeholder="Title"
                onKeyDown={() => clearBlank()}
                onChange={e => setTitle(e.target.value)}
            />
            <Label>Description</Label>
            <DesInput
                value={des || ""}
                type="text"
                placeholder="Description"
                onChange={e => setDes(e.target.value)}
            />
            <ButtonContainner>
                <Cancel onClick={e => cancelHandler(e)}>Cancel</Cancel>
                <Submit type="submit" value={submitType} />
            </ButtonContainner>
        </CreateContainner>
    );
};

export default ModalInteractTodo;

const CreateContainner = styled.form`
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

const HeadText = styled.span`
font-size: 2rem;
font-weight: bold;
overflow-wrap: break-word;
margin-bottom: .1em;
`;

const Label = styled.span`
font-size: 1.5rem;
overflow-wrap: break-word;
margin-bottom: .3em;
`;

const InputModal = styled.input`
font-size: 1.5rem;
padding: 0.4em;
margin-bottom: 0.8em;
border: none;
background-color: #e0e0e0;
border-radius: 5px;
box-sizing: border-box;
width: 100%;
`;

const DesInput = styled.textarea`
font-size: 1.5rem;
padding: 0.4em;
margin-bottom: 0.8em;
border: none;
background-color: #e0e0e0;
border-radius: 5px;
box-sizing: border-box;
width: 100%;
resize: none;
height: 200px;
`

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

const Submit = styled.input`
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

const ErrorTextTitle = styled.span`
display: ${({ blankTitle }) => blankTitle ? "flex" : "none"};
margin: 0.3em 0;
font-size: .6rem;
color: #ff2424;
`;