import React from 'react';

import { FooterContainer, FooterWrap, FooterItemBody, FooterItemLinks, FooterItemHeading, FooterLink,FooterBottom,FooterCopy,FooterLogo,FooterSocial,FooterIcons } from './FooterElements';

import { FaFacebook, FaTwitter, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { animateScroll as scroll} from 'react-scroll';

const Footer = () => {
    const toggleTop = () => {
		scroll.scrollToTop();
	}
    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterItemBody>
                        <FooterItemLinks>
                            <FooterItemHeading>About</FooterItemHeading>
                            <FooterLink>How to use Bolla</FooterLink>
                            <FooterLink>Blog</FooterLink>
                            <FooterLink>Career</FooterLink>
                        </FooterItemLinks>
                         <FooterItemLinks>
                            <FooterItemHeading>Contact</FooterItemHeading>
                            <FooterLink>bolla@gmail.com</FooterLink>
                            <FooterLink>(+234) 930039494</FooterLink>
                            <FooterLink>(+234) 930039494</FooterLink>
                        </FooterItemLinks>
                    </FooterItemBody>
                    <FooterItemBody>
                        <FooterItemLinks>
                            <FooterItemHeading>Location</FooterItemHeading>
                            <FooterLink>Lagos</FooterLink>
                            <FooterLink>Abuja</FooterLink>
                            <FooterLink>Jos</FooterLink>
                        </FooterItemLinks>
                         <FooterItemLinks>
                            <FooterItemHeading>About</FooterItemHeading>
                            <FooterLink>How to use</FooterLink>
                            <FooterLink>Blog</FooterLink>
                            <FooterLink>Career</FooterLink>
                        </FooterItemLinks>
                    </FooterItemBody>
                </FooterWrap>
                <FooterBottom>
                    <FooterLogo onClick={toggleTop}>Bolla</FooterLogo>
                     <FooterCopy>Copyright @ {new Date().getFullYear()} All rights reserved.</FooterCopy>
                    <FooterSocial>
                        <FooterIcons>
                            <FaFacebook/>
                        </FooterIcons>
                        <FooterIcons>
                            <FaInstagram/>
                        </FooterIcons>
                        <FooterIcons>
                            <FaWhatsapp/>
                        </FooterIcons>
                        <FooterIcons>
                            <FaTwitter/>
                        </FooterIcons>
                    </FooterSocial>
                </FooterBottom>
            </FooterContainer>
        </>
    )
}

export default Footer