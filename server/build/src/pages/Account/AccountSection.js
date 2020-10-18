import React from 'react'
import {Link} from 'react-router-dom';

import {Button, Container} from "../../GlobalStyles";
import { InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img

} from '../../components/InfoSection/InfoSection.element';


export const AccountSection = ({
    primary,
    lightBg, 
    imgStart, 
    lightTopLine, 
    lightText,  
    buttonLabel,
    lightSubText, 
    description, 
    headline, 
    topLine,
    img,
    alt,
    start,
    id}) => {
    return (
        <>
            <InfoSec lightBg={lightBg} id={id}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>
                                    {topLine}
                                </TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle lightSubText={lightSubText}>{description}</Subtitle>
                                
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default AccountSection