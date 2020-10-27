import React from 'react'
import { Button } from '../GeneralElements';

import { InfoContainer,InfoWrap,InfoRow,Column1,Column2,TextWrapper,TopLine,Heading,Subtitle,BtnWrap,ImageWrap,Image} from './InfoElements';

const InfoSection = ({id,lightBg,lightText,lightTextDesc,topLine,headline,description,direction,buttonLabel,imgStart,img,alt,dark,primary,darkText,redirectLink}) => {
    return (
        <>
            <InfoContainer id={id} lightBg={lightBg}>
                <InfoWrap>
                    <InfoRow direction={direction}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading dark={dark}>{headline}</Heading>
                                <Subtitle dark={dark}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to={redirectLink} primary={primary}>{buttonLabel}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImageWrap>
                                <Image src={img} alt={alt}/>
                            </ImageWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrap>
            </InfoContainer>
        </>
    )
}

export default InfoSection;