import React, { useState, Fragment,useEffect } from "react";
import Input from "./Components/Input";
import List from "./Components/List";
import Main from "./Components/Main";
import Login from "./Components/Login";
import Modal from "./Components/Modal"
import Header from "./Components/Header"
import styled from "styled-components";
import axios from 'axios'
import { Switch, Route, Redirect } from 'react-router-dom'

const App = () => {
  const [token, setToken] = useState("")
  const [authorized, setAuthorized] = useState(false)
  const [isModalOpen,setIsModalOpen] = useState(false)
  const [modalType,setModalType] = useState("")
  const [todoToInteract,setTodoToInteract] = useState("")
  const [todoList,setTodoList] = useState([])
//   useEffect(() => {
//     getAllTodo()
// }, [authorized]);
  // console.log(token)
  // console.log(authorized)
  const url = "https://candidate.neversitup.com/todo/todos"
  const Token = "Bearer " + token
  const getAllTodo = () => {
        axios({
            "url": url,
            "method": "GET",
            "headers": {
                "Authorization": Token,
            }})
            .then(function (response) {
                console.log(response)
                setTodoList(response.data)
            })
            .catch(function (error) {
                // console.log(error)
            });
  }
  const callbackIsModalOpen = (type) => {
    setIsModalOpen(type)
    // console.log(isModalOpen,id)
  }
  const callbackModalType = (type,payload) => {
    setModalType(type)
    setTodoToInteract(payload)
    console.log(type)
    // if(type == "delete"){
    //   setTodoToInteract(payload)
    //   // console.log(title)
    // }else if(type == "update"){
      
    // }
    // console.log("modalType",modalType)
  }
  const callbackToken = (token) => {
    setToken(token)
  }
  const callbackAuthorized = (type) => {
    setAuthorized(type)
  }
  return (
    <Fragment>
      <Modal 
        token={token}
        isOpen={isModalOpen} 
        callbackIsModalOpen={callbackIsModalOpen}
        modalType={modalType}
        todoToInteract={todoToInteract}
        getAllTodo={getAllTodo}
      />
      <Header/>
      <Wrapper style={{minHeight: 'calc(100vh - 50px)'}} authorized={authorized}>
        <Switch>
          <Route exact path="/">
            {authorized ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
          </Route>
          <Route exact path="/dashboard" render={(props) => 
                        <Main {...props}
                          token={token} 
                          callbackIsModalOpen={callbackIsModalOpen} 
                          callbackModalType={callbackModalType}
                          authorized={authorized}
                          todoList={todoList}
                          getAllTodo={getAllTodo}
                          />
          }/>
          <Route path="/login" render={(props) => 
                      <Login {...props} callbackToken={callbackToken} callbackAuthorized={callbackAuthorized}/>
          }/>
          {/* <Route path="/about" component={About} />
          <Route path="/posts" component={Post} />
          <Route path="/projects" component={Project} /> */}
        </Switch>
      </Wrapper>
    </Fragment>
  );
}

export default App

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  justify-content: ${({ authorized }) => authorized ? "unset" : "center"};
  padding: ${({ authorized }) => authorized ? "1em 0" : "0"};
  align-items: center;
  width: 100%;
  color: #474747;
  background-color: #ededed;
  @media only screen and (max-width: 768px){
    /* padding: 32px; */
  }
`;
