import React from 'react';
import Video from '../../assets/video2.mp4';
import {HeroBg, HeroContainer, VideoBg} from './HeroElement';

const HeroSection = () => {
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
        </HeroContainer>
    )
}

export default HeroSection
