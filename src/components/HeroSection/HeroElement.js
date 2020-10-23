import styled from 'styled-components/macro';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';

export const HeroContainer = styled.div`
      position: relative;
      width:100%;
      height:800px;
      background:#010606;
      display:flex;
      justify-content:center;
      align-items:center;
      padding:10px 20px;
      z-index:1;

      :before{
             content:'';
            position:absolute;
            top:0; left:0; right:0; bottom:0;
            background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, .6) 100%), linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
            z-index:2
      }
`;

export const HeroBg = styled.div`
      position: absolute;
      top:0;
      left: 0;
      right: 0;
      bottom:0;
      overflow:hidden;
      width:100%;
      height:100%;
      z-index:2;
`

export const VideoBg = styled.video`
      width:100%;
      height:100%;
      -o-object-fit:cover;
      object-fit:cover;
      background:#010606;
`

export const HeroContent = styled.div`
      position: absolute;
      padding:8px 24px;
      display:flex;
      flex-direction:column;
      align-items:center;
      text-align:center;
      max-width:1100px;
      z-index:3;
`

export const HeroH1 = styled.h1`
      display:flex;
      align-items:center;
      font-size:48px;
      color: #fff;
      text-transform:capitalize;
      margin-bottom:1rem;

      @media screen and (max-width: 768px){
            font-size:32px;
      }

      @media screen and (max-width: 480px){
            font-size:24px;
      }
`
export const HeroP = styled.p`
      font-size:24px;
      color: #fff;

       @media screen and (max-width: 768px){
            font-size:22px;
      }

      @media screen and (max-width: 480px){
            font-size:18px;
      }
`

export const BtnWrap = styled.div`
      margin-top:32px;
      display: flex;
      flex-direction:column;
      align-items:center;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
     margin-left:8px;
     font-size:20px;
`

export const ArrowForward = styled(MdArrowForward)`
      margin-left:8px;
     font-size:20px;
` 