import React from 'react';

import { FaTimes } from 'react-icons/fa';

import {SidebarContainer,SidebarWrap,SideClose,SideMenu,SideBtn,NavItem,NavBtn,NavLink } from './SideBarElements';

const SideBar = ({navToggle,toggle}) => {
    return (
        <>
			<SidebarContainer toggle={toggle}>
				<SidebarWrap>
					<SideClose onClick={navToggle}>
						<FaTimes/>
					</SideClose>
					<SideMenu>
						<NavItem>
							<NavLink to="about">About</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to="discover">Discover</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to="service">Services</NavLink>
						</NavItem>
					</SideMenu>
					<SideBtn>
						<NavBtn>Sign Up</NavBtn>
					</SideBtn>
				</SidebarWrap>
			</SidebarContainer>
        </>
    )
}

export default SideBar