import styled from 'styled-components/macro';

import { Link as LinkR} from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const SidebarContainer = styled.div`
      width:100%;
      height:100%;
      background:#010606;
      top:${({toggle})=>(toggle ? '0':'-100%')};
      left:0;
      bottom:0;
      right:0;
      position:fixed;
      z-index:200;
      transition: 0.5s all ease-in-out;
      opacity: ${({toggle})=>(toggle ? '100%' : '0')};
`
export const SidebarWrap = styled.div`
      width:100%;
      height:100%;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      /* padding:20px 30px;  */
`

export const SideClose = styled.div`
      color:#fff;
      top:20px;
      right:30px;
      position:absolute;
      font-size:1.5rem;
      cursor: pointer;

       &:hover{
            color:#ED2939;
            transition: .5s all ease-in-out;
      }
`

export const SideMenu = styled.ul`
      display:flex;
      flex-direction:column;
      margin: 0 auto 2rem;
`

export const NavItem = styled.li`
      display:flex;
      justify-content:flex-start;
      align-items:center;
      margin: 1rem auto;
      padding:5px 10px;

      &:last-child{
            margin-bottom:0;
      }

      
`
export const NavLink = styled(LinkS)`
      color:#fff;
      font-size:1.4rem;
      font-weight:700;
      cursor: pointer;

       &:hover{
            color:#ED2939;
            transition: .5s all ease-in-out;
      }
`

export const SideBtn = styled.div`
       display:flex;
      align-items:center;
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