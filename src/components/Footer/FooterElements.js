import styled from 'styled-components/macro';

import { Link as LinkR } from 'react-router-dom';

export const FooterContainer = styled.div`
      background:#101522;
      color:#fff;
      display:flex;
      flex-direction:column;
      width:100%;
      padding:40px 20px;
`
export const FooterWrap = styled.div`
      width:100%;
      max-width:1000px;
      padding:10px 30px;
      display:flex;
      flex-direction:row;
      align-items:center;
      justify-content:space-between;
      margin: 0 auto;

      @media screen and (max-width:568px){
            flex-direction:column;
      }
`
export const FooterItemBody = styled.div`
      width:50%;
      text-align:center;
     display:flex;
      flex-direction:row;
      align-items:center;
      justify-content:space-between;
      margin: 0 auto 1rem;

      @media screen and (max-width:768px){
            flex-direction:column;
      }
      
      @media screen and (max-width:568px){
            flex-direction:column;
      }

      @media screen and (max-width:480px){
            width:100%;
            flex-direction:column;
      }
`
export const FooterItemLinks = styled.div`
      width:100%;
      margin-bottom:1rem;
      display:flex;
      flex-direction:column;
`

export const FooterItemHeading = styled.h2`
      font-size:25px;
      font-weight:500;
      letter-spacing:1px;
      margin-right:-1px;
      margin-bottom:5px;

      @media screen and (max-width:480px){
            font-size:15px;
      }
`

export const FooterLink = styled(LinkR)`
      font-size:15px;
      font-weight:400;
      letter-spacing:1px;
      margin-right:-1px;
      margin-bottom:5px;
      text-decoration:none;
      color:#ccc;
      cursor:pointer;

       &:hover{
            color:#ED2939;
            transition: .5s all ease-in-out;
      }

        @media screen and (max-width:480px){
            font-size:10px;
      }

`
export const FooterBottom = styled.div`
      border-top:.5px dotted #fff;
      width:100%;
      max-width:1200px;
      display:flex;
      flex-direction:row;
      margin: 0 auto;
      align-items:center;
      justify-content:space-between;
      padding:20px 40px;

      @media screen and (max-width: 568px){
            display:grid;
            grid-template-columns: 1fr;
            grid-gap:16px;
            padding:10px 20px 0;

      }
`
export const FooterLogo = styled(LinkR)`
      color:#fff;
      text-decoration:none;
      font-size:1.8rem;
      display:flex;
      align-items:center;
      justify-content:flex-start;

       &:hover{
            color:#ED2939;
            transition: .5s all ease-in-out;
      }

`
export const FooterCopy = styled.h3`
       font-size:15px;
       cursor:pointer;

      &:hover{
            color:#ED2939;
            transition: .5s all ease-in-out;
      }
`
export const FooterSocial = styled.div`
      display:flex;
      flex-direction:row;
      align-items:center;
      justify-content:space-between;
      width:100px;
      margin-top:5px;
`
export const FooterIcons = styled(LinkR)`
      font-size:20px;
      color:#fff;
      text-decoration:none;
       &:hover{
            color:#ED2939;
            transition: .5s all ease-in-out;
      }

      @media screen and (max-width: 568px){
            font-size:30px;
            margin: 0 5px;
      }

      &:first-child{
            margin-left:0;
      }
`