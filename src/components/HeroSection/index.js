import React,{useState} from 'react';
import Video from '../videos/video.mp4';

import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP,BtnWrap,ArrowForward,ArrowRight } from './HeroElement';

import {Button} from '../GeneralElements'


const HeroSection = () => {
	const [hover, setHover] = useState(false);

	const onHover = () => {
		setHover(!hover);
	}
 
    return (
        <>
			<HeroContainer>
				<HeroBg>
					<VideoBg src={Video} type="video/mp4" autoPlay loop muted/>
				</HeroBg>
				<HeroContent>
					<HeroH1>
						Virtual Banking Made Easy
					</HeroH1>
					<HeroP>
						Sign Up for a new account today and recieve $250 in credit  towards your next payment.
					</HeroP>
					<BtnWrap>
						<Button hover={hover} onMouseEnter={onHover} onMouseLeave={onHover}>Get Started {hover ? <ArrowRight/> :<ArrowForward/>}</Button>
					</BtnWrap>
				</HeroContent>
			</HeroContainer>
        </>
    )
}

export default HeroSection;