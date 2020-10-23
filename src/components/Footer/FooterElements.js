import styled from 'styled-components';

import { Link as LinkR } from 'react-router-dom';

export const FooterContainer = styled.div`
      background:#101522;
     
`

export const FooterWrap = styled.div`
      display:flex;
      padding:48px 24px;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      max-width:1100px;
      margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
      display:flex;
      justify-content:center;

      @media screen and (max-width: 820px){
            padding-top:20px;
      }
`
export const FooterLinksWrapper = styled.div`
      display:flex;
      @media screen and (max-width:820px){
            flex-direction:column;
      }
`

export const FooterLinksItems = styled.div`
      display:flex;
      flex-direction:column;
      align-items:flex-start;
      margin:16px;
      text-align:left;
      width:160px;
      box-sizing:border-box;
      color:#fff;

      @media screen and (max-width:420px){
            margin:0;
            padding:10px;
            width:100%;
      }
`

export const FooterLinkTitle = styled.h2`
      font-size:20px;
      margin-bottom:15px;
`

export const FooterLink = styled(LinkR)`
      color:#ccc;
      text-decoration:none;
      font-size:14px;
      margin-bottom:0.5rem;

      &:hover{
            color:#ED1C24;
            transition:.5s all ease-in-out;
      }
`