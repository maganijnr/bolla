import React, {useState} from 'react';

import SideBar from '../../components/SideBar';

//Section
import HeroSection from '../../components/HeroSection';
import InfoSection from '../../components/InfoSection';
import ServiceSection from '../../components/ServiceSection';
import Footer from '../../components/Footer';


//Data
import {homeObjOne,homeObjTwo,homeObjThree } from '../../components/InfoSection/Data';
import NavBar from '../../components/NavBar';


const Home = () => {
    const [toggle, setToggle] = useState(false);

    const navToggle = () => {
        setToggle(!toggle);
    }
    return (
        <>
            <SideBar navToggle={navToggle} toggle={toggle} />
            <NavBar navToggle={navToggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <ServiceSection />
            <InfoSection {...homeObjThree} />
            <Footer/>
        </>
    )
}

export default Home