import React, { useState } from "react";
import styled from "styled-components";

const Input = props => {
  let [todo, setTodo] = useState("");
  const submitHandler = () => {
    if (todo !== "") {
      props.updateList(todo);
    }
    setTodo("");
  };
  const keyDownHandler = e => {
    if (e.key === "Enter") {
      submitHandler();
    }
  };
  return (
    <InputContainer>
      <TodoInput
        type="text"
        value={todo}
        placeholder="Add your todos here."
        onKeyDown={e => keyDownHandler(e)}
        onChange={e => setTodo(e.target.value)}
      />
      <SubmitButton onClick={submitHandler}>ADD</SubmitButton>
    </InputContainer>
  );
};

export default Input;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
`;
const TodoInput = styled.input`
  -webkit-appearance: none;
  border: 0px;
  font-size: 1rem;
  height: 100%;
  width: 80%;
  padding: 0px 0px 0px 16px;
  border-radius: 8px 0 0 8px;
  &:focus {
    outline: none !important;
  }
  /* set input & button to equal */
  background-color: #e8e8e8;
  box-sizing: border-box;
  ::placeholder {
    font-size: 1rem;
    /* padding-left: 16px; */
  }
  /* focus */
`;
const SubmitButton = styled.button`
  -webkit-appearance: none;
  border: 0px;
  font-size: 1rem;
  height: 100%;
  width: 20%;
  padding: 0px 16px 0 16px;
  border-radius: 0 8px 8px 0;
  &:focus {
    outline: none !important;
  }
  /* set input & button to equal */
  box-sizing: border-box;
  text-align: center;
  font-weight: bold;
  background-color: #e8e8e8;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #e605f2;
    transition: 0.3s;
    color: #ffffff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }
`;
