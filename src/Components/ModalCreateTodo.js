import React, { Fragment, useState } from "react";
import styled from "styled-components";

const ModalCreateTodo = props => {
    const [isOpen,setIsOpen] = useState(false)
    return (
        <Fragment>
            <Wrapper></Wrapper>
        </Fragment>
    );
};

export default ModalCreateTodo;

const Wrapper = styled.div`
display: ${(props) => props.isOpen ? "block" : "none" };
position:absolute;
right:0;
top:0;
width:100%;
height:100vh;
background-color: rgba(0,0,0,0.5);
`;