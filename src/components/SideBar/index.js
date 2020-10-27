import React from 'react';

import { FaTimes } from 'react-icons/fa';
import {IconContext} from 'react-icons/lib'

import {SidebarContainer,SidebarWrap,SideClose,SideMenu,SideBtn,NavItem,NavBtn,NavLink } from './SideBarElements';

const SideBar = ({navToggle,toggle}) => {
    return (
		<>
			<IconContext.Provider value={{color:"#fff"}}>
				<SidebarContainer toggle={toggle} navToggle={navToggle}>
					<SidebarWrap>
						<SideClose onClick={navToggle}>
							<FaTimes/>
						</SideClose>
						<SideMenu>
							<NavItem>
								<NavLink onClick={navToggle} to="about">About</NavLink>
							</NavItem>
							<NavItem >
								<NavLink onClick={navToggle} to="discover">Discover</NavLink>
							</NavItem>
							<NavItem>
								<NavLink onClick={navToggle} to="service">Services</NavLink>
					    	</NavItem>
					    	<NavItem>
								<NavLink onClick={navToggle} to="signup">Sign Up</NavLink>
							</NavItem>
						</SideMenu>
						<SideBtn onClick={navToggle}>
							<NavBtn to="/signin">Sign in</NavBtn>
						</SideBtn>
					</SidebarWrap>
				</SidebarContainer>
			</IconContext.Provider>
        </>
    )
}

export default SideBar