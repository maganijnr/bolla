import React,{useState,useEffect} from 'react';

import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

import { NavContainer, NavWrap, NavLogo, MobileIcon, NavMenu, NavItem, NavLink, NavBtn, NavBtnWrap } from './NavBarElements';

import { animateScroll as scroll} from 'react-scroll';

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
	}, []);

	const toggleTop = () => {
		scroll.scrollToTop();
	}
	return (
		<>
			<IconContext.Provider value={{ color: "#fff" }}>
				<NavContainer scrollNav={scrollNav}>
					<NavWrap>
						<NavLogo onClick={toggleTop} to='/'>Bolla</NavLogo>
						<MobileIcon onClick={navToggle}>
							<FaBars/>
						</MobileIcon>
						<NavMenu>
							<NavItem>
								<NavLink
									to="about"
									spy={true}
									smooth={true}
									offset={-80}
									duration={500}
								>About</NavLink>
							</NavItem>
							<NavItem>
								<NavLink to="discover"
								spy={true}
									smooth={true}
									offset={-80}
									duration={500}
								>Discover</NavLink>
							</NavItem>
							<NavItem>
								<NavLink to="service"
								spy={true}
									smooth={true}
									offset={-80}
									duration={500}
								>Services</NavLink>
							</NavItem>
							<NavItem>
								<NavLink to="signup"
								spy={true}
									smooth={true}
									offset={-80}
									duration={500}
								>Sign Up</NavLink>
							</NavItem>
						</NavMenu>
						<NavBtnWrap>
							<NavBtn to="/signin">Sign In</NavBtn>
						</NavBtnWrap>
					</NavWrap>
				</NavContainer>
			</IconContext.Provider>
		</>
	)
}

export default NavBar