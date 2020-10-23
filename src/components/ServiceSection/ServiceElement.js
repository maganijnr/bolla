import styled from 'styled-components/macro';

export const ServiceContainer = styled.div`
      width:100%;
      padding: 10px 30px;
      background:#ccc;
      display:flex;
      
`
export const ServiceWrap = styled.div`
      width:100%;
      display:flex;
      flex-direction:column;
`

export const ServiceHeading = styled.h2`
      text-align:center;
      font-size:2.5rem;
      margin-bottom:1.5rem;
`

export const ServiceCards = styled.div`
     max-width:1100px;
     display:grid;
     margin:0 auto;
     grid-template-columns:1fr 1fr 1fr;
     grid-gap:16px;
     align-items:center;
     padding:0 50px;

      @media screen and (max-width:1000px){
             grid-template-columns:1fr 1fr;
      }

       @media screen and (max-width:768px){
             grid-template-columns:1fr;
             padding: 0 20px;
      }
`
export const Card = styled.div`
     display:flex;
     flex-direction:column;
     background:#010606;
     align-items:center;
     justify-content:flex-start;
     color:#fff;
     padding: 10px 20px;
     max-height:340px;
     border-radius:10px;
     box-shadow: 0 1px 3px rgba(0,0,0,.3);
     transition: 0.3s all ease-in-out;
     

     &:hover{
           transform: scale(1.05);
           transition: 0.5s all ease-in-out;
           cursor: pointer;
     }
`
export const CardIcon = styled.img`
      height:160px;
      width:160px;
      margin-bottom:10px;
`
export const CardHeading = styled.h1`
      font-size:1.5rem;
      margin-bottom: .5rem;
`
export const CardSubtitle = styled.p`
      font-size: .9rem;
`