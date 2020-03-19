import React, { Fragment, useState } from "react";
import styled from "styled-components";
import axios from 'axios'

const ModalUpdate = props => {
    // console.log(props)
    const url = "https://candidate.neversitup.com/todo/todos/" + props.idtoDelete
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
                props.callbackIsModalOpen(false)
            })
            .catch(function (error) {
                // console.log(error)
            });
    }
    return (
        <UpdateContainer>
            <span>title</span>
        </UpdateContainer>
    );
};

export default ModalUpdate;

const UpdateContainer = styled.div`
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