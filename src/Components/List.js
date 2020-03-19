import React, { Fragment, useState,useEffect } from "react";
import styled from "styled-components";

const List = props => {
    // console.log("List props", props);
    // useEffect(() => {

    // }, [props.todoList])
    const deleteHandler = (id,title) => {
        // console.log(id)
        props.callbackIsModalOpen(true)
        props.callbackModalType("delete",id,title)
    }
    const updateHandler = (id,title,des) => {
        console.log("update")
        props.callbackIsModalOpen(true)
        props.callbackModalType("update",id,title,des)
    }
    return (
        <Fragment>
            <ListContainner>
                {props.todoList.map((item,i) => {
                    return (
                        <ListBox key={i}>
                            <TodoBox onClick={() => updateHandler(item._id,item.title,item.description)}>
                                <Title>{item.title}</Title>
                                <Description>{item.description}</Description>
                            </TodoBox>
                            <DeleteBtn onClick={() => deleteHandler(item._id,item.title)}>x</DeleteBtn>
                        </ListBox>
                    )
                })}
            </ListContainner>
        </Fragment>
    );
};

export default List;

const ListContainner = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
/* align-items: center; */
`;

const ListBox = styled.div`
display: flex;
justify-content:center;
`;

const TodoBox = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
`;

const DeleteBtn = styled.button`

`;

const Title = styled.span`

`;

const Description = styled.span`

`;