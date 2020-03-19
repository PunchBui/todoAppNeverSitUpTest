import React, { Fragment, useState } from "react";
import styled from "styled-components";
import axios from 'axios';
import ModalCreateTodo from "./ModalCreateTodo"
import ModalDelete from "./ModalDelete"

const Modal = props => {
    // onClick={() => props.callbackIsModalOpen(false)}
    return (
        <Fragment>
            <Wrapper isOpen={props.isOpen}>
                {props.modalType == "delete" ? (
                    <ModalDelete
                    token={props.token}
                    callbackIsModalOpen={props.callbackIsModalOpen}
                    idtoDelete={props.idtoDelete}
                    titletoDelete={props.titletoDelete}
                />
                ) : props.modalType == "create" ? (
                    <ModalCreateTodo
                        token={props.token}
                        callbackIsModalOpen={props.callbackIsModalOpen}
                    />
                ) : (
                    <ModalCreateTodo
                        token={props.token}
                        callbackIsModalOpen={props.callbackIsModalOpen}
                    />
                )}
            </Wrapper>
        </Fragment>
    );
};

export default Modal;

const Wrapper = styled.div`
display: ${({isOpen}) => isOpen ? "flex" : "none" };
justify-content:center;
align-items: center;
position:absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width:100%;
height:100vh;
background-color: rgba(0,0,0,0.5);
`;