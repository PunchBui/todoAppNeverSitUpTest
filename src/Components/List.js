import React, { Fragment, useState,useEffect } from "react";
import styled from "styled-components";

const List = props => {
    // console.log("List props", props);
    // useEffect(() => {

    // }, [props.todoList])

    const actionHandler = (type,payload) => {
        props.callbackIsModalOpen(true)
        props.callbackModalType(type,payload)
    }
    const firstCapitalFilter = (title) => {
        const upperCased = title.charAt(0).toUpperCase() + title.slice(1)
        return(upperCased)
    }
    const formatDate = (iso) => {
        let date = new Date(iso);
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        let year = date.getFullYear();
        let month = monthNames[date.getMonth()+1];
        let dt = date.getDate();
        if (dt < 10) {
            dt = '0' + dt;
        }
        if (month < 10) {
            month = '0' + month;
        }
        console.log(year+'-' + month + '-'+dt);
        const formatted = dt+' ' + month + ' '+year
        return(formatted)
    }
    return (
        <Fragment>
            <ListContainner>
                {props.todoList.map((item,i) => {
                    return (
                        <ListBox key={i}>
                            <TodoBox onClick={() => actionHandler("update",item)}>
                                <Title>{firstCapitalFilter(item.title)}</Title>
                                <Description>{firstCapitalFilter(item.description)}</Description>
                                <Time>{formatDate(item.updatedAt)}</Time>
                            </TodoBox>
                            <DeleteBox>
                                <DeleteBtn onClick={() => actionHandler("delete",item)}>x</DeleteBtn>
                            </DeleteBox>
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
width: 97%;
margin: 0.3em 0;
`;

const ListBox = styled.div`
display: flex;
justify-content: space-between;
/* align-items: center; */
margin: 0.3em;
/* box-sizing: border-box; */
cursor: pointer;
border-radius: 5px;
/* align-items: center; */
&:Hover {
    background-color: #dedede;
}
`;

const TodoBox = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
width: 78%;
margin: .3em;
/* word-wrap: break-word; */
`;

const DeleteBox = styled.div`
display: flex;
justify-content: center;
margin: .3em;
/* align-items: center; */
`;

const DeleteBtn = styled.button`
width: 50px;
height: 50px;
background: #f71b1b;
border: none;
color: #e0e0e0;
font-weight: bold;
cursor: pointer;
font-size: 1.5rem;
padding: 0.3em 0 0.3em 0;
border-radius: 5px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
&:hover {

}
&:focus {
    border: none;
}
`;

const Title = styled.span`
font-size: 2rem;
font-weight: bold;
overflow-wrap: break-word;
margin-bottom: .1em;
`;

const Description = styled.span`
font-size: 1rem;
overflow-wrap: break-word;
margin-bottom: .1em;
`;

const Time = styled.span`
font-size: .6rem;
color: #9e00ff;
`;