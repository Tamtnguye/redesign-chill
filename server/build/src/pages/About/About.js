import React from "react";
import {aboutObj} from './Data';
import {AboutSection} from './AboutSection';


 export const About = () =>{
   
    return(
   <>
        <AboutSection {...aboutObj} />
    </>
    )
};
