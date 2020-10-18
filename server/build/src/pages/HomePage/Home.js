import React from 'react';
import {homeObj,
    homeObjTwo,
    homeObjThree,
    homeObjFour,
    } from "./Data";
  
import {InfoSection, HeroSection} from '../../components';

export const Home = () => {
    return (
        <>
            <HeroSection />
           <InfoSection {...homeObj} />
           <InfoSection {...homeObjTwo} />
           <InfoSection {...homeObjThree} />
           <InfoSection {...homeObjFour} />
           
        </>
    )
}


