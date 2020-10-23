import styled from 'styled-components/macro';

import { Link as LinkR} from 'react-router-dom';
import {Link as LinkS } from 'react-scroll';

export const NavContainer = styled.nav`
      background: ${({scrollNav})=>(scrollNav ? '#010606': 'tranparent')};
      z-index:100;
      height:80px;
      margin-top:-80px;
      width:100%;
      position:sticky;
      top:0;
      left:0;
      display:flex;
      align-items:center;
      justify-content:center;
      transition: 0.5s all ease-in-out;

      @media screen and (max-width:960px){
            transition: 0.5s all ease-in-out
      }

      @media screen and (max-width:768px){
            height:60px;
      }
`

export const NavWrap = styled.div`
      width:100%;
      max-width:1200px;
      padding:0 24px;
      height:80px;
      display:flex;
      flex-direction:row;
      justify-content:space-between;
      align-items:center;

      @media screen and (max-width:768px){
            height:60px;
      }
`

export const NavLogo = styled(LinkR)`
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

export const MobileIcon = styled.div`
     display:none;

      @media screen and (max-width:768px){
            position:absolute;
            color:#fff;
            font-size:1.5rem;
            cursor: pointer;
            top:0;
            right:0;
            display:block;
            transform:translate(-100%,60%);

             &:hover{
            color:#ED2939;
            transition: .5s all ease-in-out;
      }
      }
`

export const NavMenu = styled.ul`
      list-style-type:none;
      display:flex;
      flex-direction:row;
      align-items:center;
      height:100%;
      
      @media screen and (max-width:768px){
            display:none;
      }
`
export const NavItem = styled.li`
      margin: 0 1rem;
`
export const NavLink = styled(LinkS)`
      color:#fff;
      font-size:1.3rem;
      display:flex;
      align-items:center;
      text-decoration:none;
      cursor: pointer;
      transition: .5s all ease-in-out;

       &:hover{
            color:#ED2939;
            transition: .5s all ease-in-out;
      }
`
export const NavBtnWrap = styled.nav`
      display:flex;
      align-items:center;
      cursor: pointer;

       @media screen and (max-width:768px){
            display:none;
      }
`
export const NavBtn = styled(LinkR)`
      background: #ED2939;
      cursor: pointer;
      border-radius:50px;
      border:none;
      color:#fff;
      outline:none;
      text-decoration:none;
      transition: .5s all ease-in-out;
      white-space:nowrap;
      padding:10px 22px;
      font-size:1.3rem;

      &:hover{
            background: #fff;
            color:#ED2939;
            transition: .5s all ease-in-out;
      }
`