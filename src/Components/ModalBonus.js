import React, { useState } from "react";
import styled from "styled-components";

const ModalBonus = props => {
    // console.log(props)
    const [arr1,setArr1] = useState("")
    const [arr2,setArr2] = useState("")
    const [result,setResult] = useState()
    const [blankArr1,setBlankArr1] = useState(false)
    const [blankArr2,setBlankArr2] = useState(false)
    const [submited,setSubmited] = useState(false)
    const closeInvalid = () => {
        if(blankArr1){ setBlankArr1(false)}
        if(blankArr2){ setBlankArr2(false)}
    }
    const submitHandler = (e) => {
        e.preventDefault()
        setBlankArr1(arr1==="" ? true : false)
        setBlankArr2(arr2==="" ? true : false)
        if(arr1!=="" && arr2!==""){
            arrayFilter()
            setSubmited(true)
        }
    }
    const cancelHandler = (e) => {
        e.preventDefault()
        props.callbackIsModalOpen(false)
    }
    const arrayFilter = () => {
        let array1 = arr1.split(",")
        let array2 = arr2.split(",")
        array1 = array1.filter((item) => {
            return array2.includes(item); 
        })
        console.log(array1); // [ 'a', 'c', 'e' ]
        console.log(array2); // [ 'b', 'd', 'f' ]
        setResult(array1.toString() ? array1.toString() : "No Matched.")
    }
    return (
        <BonusWrapper>
            <BonusTitle>Filtering array 1 in array 2.</BonusTitle>
            <Label>Array 1</Label>
            <Error1 blankArr1={blankArr1}>Array 1 can't be blank.</Error1>
            <InputModal
                value={arr1 || ""}
                type="text"
                onKeyDown={() => closeInvalid()}
                placeholder="Ex. 1,2,3"
                onChange={e => setArr1(e.target.value)}
            />
            <Label>Array 2</Label>
            <Error2 blankArr2={blankArr2}>Array 1 can't be blank.</Error2>
            <InputModal
                value={arr2 || ""}
                type="text"
                onKeyDown={() => closeInvalid()}
                placeholder="Ex. 1,2,3,4,5,6"
                onChange={e => setArr2(e.target.value)}
            />
            <ResultBox submited={submited}>
                <Label>Result</Label>
                <ResultText>{result}</ResultText>
            </ResultBox>
            <ButtonContainner>
                <Cancel onClick={e => cancelHandler(e)}>Close</Cancel>
                <Submit onClick={e => submitHandler(e)}>Filter</Submit>
            </ButtonContainner>
        </BonusWrapper>
    );
};

export default ModalBonus;

const BonusWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
/* align-items: center; */
background-color: #FFFFFF;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
width: 40%;
border-radius: 5px;
padding: .5em;
@media only screen and (max-width: 768px){
    width: 90%;
    border-radius: 5px;
}
`;

const ResultBox = styled.div`
display: ${({ submited }) => submited ? "flex" : "none"};
flex-direction: column;
width: 100%;
`;

const ResultText = styled.span`
font-size: 1.5rem;
padding: 0.4em;
margin-bottom: 0.8em;
border: none;
background-color: #e0e0e0;
border-radius: 5px;
box-sizing: border-box;
overflow-wrap: break-word;
width: 100%;
`;

const ButtonContainner = styled.div`
display: flex;
justify-content:center;
`;

const BonusTitle = styled.span`
font-size: 2rem;
font-weight: bold;
overflow-wrap: break-word;
margin-bottom: .1em;
`;

const Cancel = styled.button`
width: 25%;
background: #f71b1b;
border: none;
color: #e0e0e0;
font-weight: bold;
cursor: pointer;
font-size: 1.5rem;
padding: 0.3em 0 0.3em 0;
border-radius: 5px 0 0 5px;
&:hover {
    box-shadow:  0 6px 20px 0 rgba(0, 0, 0, 0.19),0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
&:focus {
    border: none;
}
@media only screen and (max-width: 768px){
    width: 50%;
}
`;

const Submit = styled.button`
width: 25%;
background: #9e00ff;
border: none;
color: #e0e0e0;
font-weight: bold;
cursor: pointer;
font-size: 1.5rem;
padding: 0.3em 0 0.3em 0;
border-radius: 0 5px 5px 0;
&:hover {
box-shadow:  0 6px 20px 0 rgba(0, 0, 0, 0.19),0 4px 8px 0 rgba(0, 0, 0, 0.2);

}
&:focus {
    border: none;
}
@media only screen and (max-width: 768px){
    width: 50%;
}
`;

const Label = styled.span`
font-size: 1.5rem;
overflow-wrap: break-word;
margin-bottom: .3em;
`;

const InputModal = styled.input`
font-size: 1.5rem;
padding: 0.4em;
margin-bottom: 0.8em;
border: none;
background-color: #e0e0e0;
border-radius: 5px;
box-sizing: border-box;
width: 100%;
`;

const Error1 = styled.span`
display: ${({ blankArr1 }) => blankArr1 ? "flex" : "none"};
margin: 0.3em 0;
font-size: .6rem;
color: #ff2424;
`;

const Error2 = styled.span`
display: ${({ blankArr2 }) => blankArr2 ? "flex" : "none"};
margin: 0.3em 0;
font-size: .6rem;
color: #ff2424;
`;