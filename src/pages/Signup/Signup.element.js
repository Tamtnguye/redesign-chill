import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SignupContainer = styled.div`
color: #fff;
display:flex;
justify-content: center;
padding: 160px 0;
`;
//
export const SignupWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
border: 3px solid black;
width: 560px;
margin-bottom: 24px;
padding: 24px;
color: black;
`;
export const SignupNav = styled.div`
width: 100%;
opacity: 1;

`;

export const SignupForm = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const Form = styled.form`
display: flex;
justify-content: center;
align-items: center;

@media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;

}
`;

export const FormInput = styled.input`
padding: 10px 20px;
border-radius: 2px;
margin-right: 10px;
outline: none;
border: none;
font-size: 16px;
border: 1px solid #fff;
`;

export const SignupForgot = styled.div`
position: relative;
height: 100px;
margin-left: auto;
margin-right: auto;
text-align: center;
`;
