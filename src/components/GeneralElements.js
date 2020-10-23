import styled from 'styled-components/macro';
import { Link as LinkR } from 'react-router-dom';

export const Button = styled(LinkR)`
      background: ${({ hover }) => (hover ? '#fff' : '#ED2939')};
      color: ${({ hover }) => (hover ? '#010606' : '#fff')};
      outline: none;
      cursor: pointer;
      text-decoration:none;
      border-radius:50px;
      border:none;
      display:flex;
      flex-direction:row;
      align-items:center;
      justify-content:center;
      padding:10px 20px;
      transition:0.5s all ease-in-out;
      font-weight:600;
`