import React from 'react';

import {FooterContainer,FooterWrap,FooterLinksWrapper,FooterLinksContainer,FooterLink,FooterLinkTitle,FooterLinksItems} from './FooterElements'

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinksItems>
                                <FooterLinkTitle>About</FooterLinkTitle>
                                <FooterLink to='/signin'>How it works</FooterLink>
                                <FooterLink to='/signin'>Testimonial</FooterLink>
                                <FooterLink to='/signin'>Career</FooterLink>
                            </FooterLinksItems>
                            <FooterLinksItems>
                                <FooterLinkTitle>Videos</FooterLinkTitle>
                                <FooterLink to='/signin'>Steps on EBanking</FooterLink>
                                <FooterLink to='/signin'>Get a referral</FooterLink>
                                <FooterLink to='/signin'>Blog</FooterLink>
                            </FooterLinksItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            <FooterLinksItems>
                                <FooterLinkTitle>Contact</FooterLinkTitle>
                                <FooterLink to='/signin'>08000706006</FooterLink>
                                <FooterLink to='/signin'>09949490303</FooterLink>
                                <FooterLink to='/signin'>0048588844</FooterLink>
                            </FooterLinksItems>
                            <FooterLinksItems>
                                <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to='/signin'>Twitter</FooterLink>
                                <FooterLink to='/signin'>Facebook</FooterLink>
                                <FooterLink to='/signin'>Instagram</FooterLink>
                                <FooterLink to='/signin'>Medium</FooterLink>
                            </FooterLinksItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default Footer