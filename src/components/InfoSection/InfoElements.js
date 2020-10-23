import styled from 'styled-components/macro';

export const InfoContainer = styled.div`
      background: ${({ lightBg }) => (lightBg ? "#fff" : "#010606")};
      color:#fff;
      padding:50px 0;

      @media screen and (max-width:768px){
            padding:0;
      }
`

export const InfoWrap = styled.div`
      display:grid;
      height:860px;
      width:100%;
      max-width:1100px;
      justify-content:center;
      margin:0 auto;

`
export const InfoRow = styled.div`
     display:flex;
     flex-direction: ${({ direction }) => (direction)};
     justify-content:space-between;

     @media screen and (max-width:768px){
           flex-direction:column;
           margin: 0 auto;
           align-items:center;
           justify-content:center;
     }
`
export const Column1 = styled.div`
      width:50%;
      display:flex;
      align-items:center;
      justify-content:center;
      padding:0 10px;

      @media screen and (max-width:768px){
            width:400px;
            margin-bottom:30px;
      }

      @media screen and (max-width:480px){
          width:300px;
     }
`
export const Column2 = styled.div`
      width:50%;
      display:flex;
      align-items:center;
      justify-content:center;
       padding:0 10px;
` 
export const TextWrapper = styled.div`
      width:100%;
      display:flex;
      flex-direction:column;
      justify-content:flex-start
`
export const TopLine = styled.h4`
      color:#ED2939;
      font-size:.8rem;
      margin-bottom:.5rem;
`
export const Heading = styled.h2`
      color: ${({ dark }) => (dark ? '#fff' : "#010606")};
      font-size:3rem;
      margin-bottom:.5rem;
        
      @media screen and (max-width:768px){
            font-size:2rem;
      }
`
export const Subtitle = styled.p`
      color: ${({ dark }) => (dark ? '#fff' : "#010606")};
      font-size:1.5rem;
      margin-bottom:1rem;

      @media screen and (max-width:768px){
            font-size:1rem;
      }
`
export const BtnWrap = styled.div`
      display:flex;
      justify-content:flex-start;
`

export const ImageWrap = styled.div`
      width:100%;
      display:flex;
      align-items:center;
      justify-content:center;

      @media screen and (max-width:768px){
            font-size:1rem;
            display:flex;
            align-items:center;
            justify-content:center;
      }
      /* overflow:hidden; */
`
export const Image = styled.img`
      width:100%;

      @media screen and (max-width:768px){
            width:300px;
      }
`