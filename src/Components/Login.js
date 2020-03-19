import React, { Fragment, useState } from "react";
import styled from "styled-components";
import axios from 'axios'

const Login = props => {
    const [user, setUser] = useState("punch")
    const [pass, setPass] = useState("1563542879")
    const keyDownHandler = e => {
        if (e.key === "Enter") {
            submitHandler();
        }
    };
    const submitHandler = (e) => {
        e.preventDefault()
        //   console.log(user,password)
        checkUser();
    }
    //api
    const url = "https://candidate.neversitup.com/todo/users/auth"
    const checkUser = () => {
        axios({
            "url": url,
            "method": "POST",
            "data": {
                "username" : user,
                "password" : pass
            }
        })
        .then(function (response) {
            // console.log(response)
            props.callbackToken(response.data.token)
            // console.log(token);
            props.callbackAuthorized(true)
        })
        .catch(function (error) {
            // console.log(error)
        });
    }
    return (
        <Fragment>
            <LoginContainer onSubmit={e => submitHandler(e)}>
                <span>User</span>
                <input
                    value={user}
                    type="text"
                    placeholder="Username"
                    onChange={e => setUser(e.target.value)}
                />
                <span>Password</span>
                <input
                    type="password"
                    value={pass}
                    type="text"
                    placeholder="Password"
                    onKeyDown={e => keyDownHandler(e)}
                    onChange={e => setPass(e.target.value)}
                />
                <input type="submit" value="Submit" />
            </LoginContainer>
        </Fragment>
    );
};

export default Login;

const LoginContainer = styled.form`
display: flex;
flex-direction: column;
justify-content: right;
/* align-items: center; */
`;