import React, { useState, Fragment } from "react";
import Input from "./Components/Input";
import List from "./Components/List";
import Main from "./Components/Main";
import Login from "./Components/Login";
import ModalCreateTodo from "./Components/ModalCreateTodo";
import styled from "styled-components";
import { Switch, Route, Redirect } from 'react-router-dom'

const App = () => {
  const [token, setToken] = useState("")
  const [authorized, setAuthorized] = useState(false)
  // console.log(token)
  // console.log(authorized)
  return (
    <Fragment>
      <ModalCreateTodo/>
      <Wrapper>
        <Switch>
          <Route path="/" render={(props) => authorized ? 
            <Main {...props} token={token}/> : 
            <Login {...props} setToken={setToken} setAuthorized={setAuthorized} />} 
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
