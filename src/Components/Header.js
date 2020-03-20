import React, { Fragment, } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Header = () => {
    return(
        <Fragment>
            <Wrapper>
                <HeaderTitle>Todos</HeaderTitle>
            </Wrapper>
        </Fragment>
    )
}

export default Header;

const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items:center;
font-size: 1.5rem;
font-weight: bold;
color: #FFFFFF;
position: relative;
height: 50px;
/* z-index: 2; */
padding: 0.3em 0 0.3em 0;
width: 100%;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
/* border-radius: 5px 5px 0 0; */
background: linear-gradient(90deg, rgba(255,214,0,1) 0%, rgba(226,83,27,1) 50%, rgba(158,0,255,1) 100%);
`

const HeaderTitle = styled.span`
box-sizing: border-box;
`;