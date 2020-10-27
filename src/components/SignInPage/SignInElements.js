import styled from 'styled-components/macro';

import { Link as LinkR } from 'react-router-dom';

export const SignInContainer = styled.div`
      position:fixed;
      min-height:682px;
      width:100%;
      background:rgba(237, 41, 57,1);
      top:0; left:0; bottom:0; right:0;
      overflow:hidden;
      z-index:0;
`
export const FormWrap = styled.div`
      display:flex;
      height:100%;
      flex-direction:column;
      justify-content:center;
      align-items:center;

       @media screen and (max-width:400px){
            height:80%;
      }
`
export const Icon = styled(LinkR)`
      text-decoration:none;
      top:32px;
      left:32px;
      position:absolute;
      color:#fff;
      text-decoration:none;
      font-size:1.8rem;
      display:flex;
      align-items:center;
      justify-content:flex-start;

       @media screen and (max-width:480px){
            top:16pxpx;
            left:8px;
      }
`

export const FormContent = styled.div`
      background:#010606;
      color:#fff;
      display:flex;
      flex-direction:column;
      margin:0 auto;
      padding:10px;
      border-radius:10px;
     
`
export const Form = styled.form`
      width:100%;
`
export const FormH1 = styled.h1`
      font-size:30px;
      display:block;
      margin:0 auto 40px;
      text-transform:uppercase;

      @media screen and (max-width:480px){
            font-size:120px;
      }
`
export const FormGroup = styled.div`
      display:flex;
      flex-direction:column;
      justify-content:flex-start;
      margin:10px auto;
      padding:5px;
`
export const FormLabel = styled.label`
      font-size:18px;
      margin-bottom:8px;
`
export const FormInput = styled.input`
      height:2rem;
      border-radius:5px;
      outline:none;
      border:1px solid #fff;
      padding:.5rem;
      letter-spacing:1px;
      font-weight:500;
      font-family:inherit;
      @media screen and (max-width:480px){
           height:1.5rem;
      }
`
export const FormBtnWrap = styled.div`
      display:flex;
      justify-content:center;
      margin:10px auto;
      padding:5px;
`
export const FormBtn = styled(LinkR)`
      text-decoration:none;
      background:#ED2939;
      width:100%;
      text-align:center;
      color:#fff;
      padding:10px 20px;
      border-radius:5px;
      font-weight:500;


      &:hover{
            background:#fff;
            transition: 0.5s all ease-in-out;
            color:#ED2939;
            /* border:2px solid #ED2939; */
      }
`

export const FormRedirect = styled(LinkR)`
      margin: 0 auto;
      text-decoration: none;
      color:#fff;

       &:hover{
            transition: 0.5s all ease-in-out;
            color:#ED2939;
            /* border:2px solid #ED2939; */
      }
`