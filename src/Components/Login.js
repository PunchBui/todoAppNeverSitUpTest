import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import {checkUser as apiCheckUser} from '../Api'

const Login = props => {
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    const [blankUser, setBlankUser] = useState(false)
    const [blankPass, setBlankPass] = useState(false)
    const [invalid, setInvalid] = useState(false)
    let history = useHistory();
    const keyDownHandler = e => {
        if (e.key === "Enter") {
            submitHandler(e);
        }
    };
    const submitHandler = (e) => {
        e.preventDefault()
        setBlankUser(user === "" ? true : false)
        setBlankPass(pass === "" ? true : false)
        if(user!=="" && pass!==""){
            // setInvalid(false)
            checkUser();
        }
    }
    const closeInvalid = () => {
        if(invalid){setInvalid(false)}
    }
    //api
    let errerMessage = "Invalid username or password."
    const checkUser = () => {
        apiCheckUser(user,pass)
        .then((response) => {
            // console.log(response)
            props.callbackToken(response.data.token)
            // console.log(token);
            props.callbackAuthorized(true)
            history.push("/dashboard");
        })
        .catch( (error) => {
            setInvalid(true)
            console.log(error)
        });
    }
    return (
        <Fragment>
            <LoginContainer>
                <LoginTitle>Login</LoginTitle>
                <InputBox onSubmit={e => submitHandler(e)}>
                    <Title>Username</Title>
                    <ErrorTextTitle blankUser={blankUser}>Please fill username.</ErrorTextTitle>
                    <LoginInput
                        value={user}
                        type="text"
                        placeholder="Username"
                        onKeyDown={() => closeInvalid()}
                        onChange={e => setUser(e.target.value)}
                    />
                    <Title>Password</Title>
                    <ErrorTextPass blankPass={blankPass}>Please fill password.</ErrorTextPass>
                    <LoginInput
                        type="Password"
                        value={pass}
                        placeholder="Password"
                        onKeyDown={e => keyDownHandler(e),() => closeInvalid()}
                        onChange={e => setPass(e.target.value)}
                    />
                    <ErrorAuthenicate invalid={invalid}>{errerMessage}</ErrorAuthenicate>
                    <SubmitBtn type="submit" value="Submit" />
                </InputBox>
            </LoginContainer>
        </Fragment>
    );
};

export default Login;

const LoginContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: right;
/* align-items: center; */
background-color: #FFFFFF;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
width: 50%;
border-radius: 5px;
@media only screen and (max-width: 768px){
    width: 90%;
    border-radius: 5px;
}
`;

const LoginTitle = styled.div`
display: flex;
justify-content: center;
align-items:center;
font-size: 3rem;
font-weight: bold;
color: #FFFFFF;
padding: 0.3em 0 0.3em 0;
width: 100%;
border-radius: 5px 5px 0 0;
background: linear-gradient(90deg, rgba(255,214,0,1) 0%, rgba(226,83,27,1) 50%, rgba(158,0,255,1) 100%);
`;
const Title = styled.span`
font-weight: bold;
font-size: 1.2rem;
margin-top: 10em;
box-sizing: border-box;
line-height: 2em;
`;

const LoginInput = styled.input`
font-size: 1.5rem;
padding: 0.4em;
margin-bottom: 0.8em;
border: none;
background-color: #e0e0e0;
border-radius: 5px;
box-sizing: border-box;
width: 100%;
`;
const InputBox = styled.form`
margin: 1em 0.8em 1em 0.8em;

`;

const SubmitBtn = styled.input`
width: 100%;
background: #9e00ff;
border: none;
color: #e0e0e0;
font-weight: bold;
cursor: pointer;
font-size: 1.5rem;
padding: 0.3em 0 0.3em 0;
border-radius: 25px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
&:hover {

}
&:focus {
    border: none;
    outline:none;
}
`;

const ErrorTextTitle = styled.span`
display: ${({ blankUser }) => blankUser ? "flex" : "none"};
margin: 0.3em 0;
font-size: .6rem;
color: #ff2424;
`;

const ErrorTextPass = styled.span`
display: ${({ blankPass }) => blankPass ? "flex" : "none"};
margin: 0.3em 0;
font-size: .6rem;
color:#ff2424;
`;

const ErrorAuthenicate = styled.span`
margin: 1em;
display: ${({ invalid }) => invalid ? "flex" : "none"};
font-size: .6rem;
color:#ff2424;
`;