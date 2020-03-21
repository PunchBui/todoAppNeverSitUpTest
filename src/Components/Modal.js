import React, { Fragment, useState } from "react";
import styled from "styled-components";
import axios from 'axios';
import ModalInteractTodo from "./ModalInteractTodo"
import ModalDelete from "./ModalDelete"
import ModalBonus from "./ModalBonus"

const Modal = props => {
    // onClick={() => props.callbackIsModalOpen(false)}
    // console.log(props.todoToInteract)
    return (
        <Fragment>
            <Wrapper isOpen={props.isOpen}>
                {props.modalType == "delete" 
                ? <ModalDelete
                        token={props.token}
                        callbackIsModalOpen={props.callbackIsModalOpen}
                        todoToInteract={props.todoToInteract}
                        getAllTodo={props.getAllTodo}
                  />
                : props.modalType === "bonus" 
                ? <ModalBonus
                        callbackIsModalOpen={props.callbackIsModalOpen}
                  />
                : <ModalInteractTodo
                        token={props.token}
                        callbackIsModalOpen={props.callbackIsModalOpen}
                        modalType={props.modalType}
                        todoToInteract={props.todoToInteract}
                        getAllTodo={props.getAllTodo}
                  />
                }
            </Wrapper>
        </Fragment>
    );
};

export default Modal;

const Wrapper = styled.div`
display: ${({ isOpen }) => isOpen ? "flex" : "none"};
justify-content:center;
align-items: center;
position: fixed;
width:100%;
height:100vh;
background-color: rgba(0,0,0,0.5);
z-index: 2;
`;