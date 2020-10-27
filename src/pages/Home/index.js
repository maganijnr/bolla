import React, {useState} from 'react';

import SideBar from '../../components/SideBar';

//Section
import HeroSection from '../../components/HeroSection';
import InfoSection from '../../components/InfoSection';
import ServiceSection from '../../components/ServiceSection';
import Footer from '../../components/Footer';


//Data
import {homeObjOne,homeObjTwo,homeObjThree } from '../../components/InfoSection/Data';


const Home = ({navToggle,toggle}) => {
    return (
        <>
            <SideBar navToggle={navToggle} toggle={toggle} />
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