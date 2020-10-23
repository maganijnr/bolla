import React,{useState,useEffect} from 'react';

import { FaBars } from 'react-icons/fa';

import {NavContainer,NavWrap,NavLogo,MobileIcon,NavMenu,NavItem,NavLink,NavBtn,NavBtnWrap} from './NavBarElements'

const NavBar = ({ navToggle }) => {
	const [scrollNav, setScrollNav] = useState(false);

	const changeScrollNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', changeScrollNav);
	},[])
	return (
		<>
			<NavContainer scrollNav={scrollNav}>
				<NavWrap>
					<NavLogo to='/'>Bolla</NavLogo>
					<MobileIcon onClick={navToggle}>
						<FaBars/>
					</MobileIcon>
					<NavMenu>
						<NavItem>
							<NavLink to="about">About</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to="discover">Discover</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to="service">Services</NavLink>
						</NavItem>
					</NavMenu>
					<NavBtnWrap>
						<NavBtn to="/signup">Sign Up</NavBtn>
					</NavBtnWrap>
				</NavWrap>
			</NavContainer>
		</>
	)
}

export default NavBar