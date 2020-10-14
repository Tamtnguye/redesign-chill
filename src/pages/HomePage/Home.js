import React from 'react';
import {homeObj,
    homeObjTwo,
    homeObjThree,
    homeObjFour,
    } from "./Data";
import {InfoSection} from '../../components';

export const Home = () => {
    return (
        <>
           <InfoSection {...homeObj} />
           <InfoSection {...homeObjTwo} />
           <InfoSection {...homeObjThree} />
           <InfoSection {...homeObjFour} />
           
        </>
    )
}


