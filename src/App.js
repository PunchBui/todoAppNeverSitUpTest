import React, { useState, Fragment } from "react";
import Input from "./Components/Input";
import List from "./Components/List";
import Main from "./Components/Main";
import Login from "./Components/Login";
import Modal from "./Components/Modal"
import styled from "styled-components";
import { Switch, Route, Redirect } from 'react-router-dom'

const App = () => {
  const [token, setToken] = useState("")
  const [authorized, setAuthorized] = useState(false)
  const [isModalOpen,setIsModalOpen] = useState(false)
  const [modalType,setModalType] = useState("")
  const [idtoDelete,setIdtoDelete] = useState("")
  const [titletoDelete,setTitletoDelete] = useState("")
  // console.log(token)
  // console.log(authorized)
  const callbackIsModalOpen = (type) => {
    setIsModalOpen(type)
    // console.log(isModalOpen,id)
  }
  const callbackModalType = (type,id,title,des) => {
    setModalType(type)
    if(type == "delete"){
      setIdtoDelete(id)
      setTitletoDelete(title)
      // console.log(title)
    }else if(type == "update"){
      
    }
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
        idtoDelete={idtoDelete}
        titletoDelete={titletoDelete}
      />
      <Wrapper>
        <Switch>
          <Route path="/" render={(props) => authorized ? 
            <Main {...props}
              token={token} 
              callbackIsModalOpen={callbackIsModalOpen} 
              callbackModalType={callbackModalType}
            /> : 
            <Login {...props} callbackToken={callbackToken} callbackAuthorized={callbackAuthorized} />} 
          />
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
  justify-content:center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;
