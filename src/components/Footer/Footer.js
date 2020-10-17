import React from 'react';

import {Button} from '../../GlobalStyles'
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa';
import {FooterContainer, 
    FooterSubHeading, 
    FooterSubText, 
    FooterSubscription, 
    Form, 
    FormInput, 
    FooterLink, 
    FooterLinksItems,
    FooterLinksTitle,
    FooterLinksContainer,
    FooterLinksWrapper,
    SocialIconLink,
    SocialIcon,
    SocialIcons,
    SocialLogo,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights} from './Footer.element';

//check on how to get font-family to work with styled
//also animation
 const Footer = ( ) => {
    return (
        <FooterContainer >
            <FooterSubscription>
                <FooterSubHeading >
                    Join our exclusive membership to receive the latest news and trends
                </FooterSubHeading>
                <FooterSubText>
                    You can unsubscribe at any time.
                </FooterSubText>
                <Form>
                    <FormInput name="email" type="email" placeholder="Your Email"/>
                        <Button fontBig>Subscribe</Button>
                    
                </Form>
            </FooterSubscription>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinksTitle>About Us</FooterLinksTitle>
                        <FooterLink to='/signup'> How it Works</FooterLink>
                        <FooterLink to='/'> Testimonials</FooterLink>
                        <FooterLink to='/'>Careers</FooterLink >  <FooterLink to='/'>Investors</FooterLink>  <FooterLink to='/'>Terms of Service</FooterLink>
                    </FooterLinksItems>
                    
                    <FooterLinksItems>
                        <FooterLinksTitle>Contact Us</FooterLinksTitle>
                        <FooterLink to='/signup'> Contact</FooterLink>
                        <FooterLink to='/'> Support</FooterLink>
                        <FooterLink to='/'>Code of Conduct</FooterLink >  <FooterLink to='/'>Find a Store</FooterLink>  
                    </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinksTitle>Social Media</FooterLinksTitle>
                        <FooterLink to='/signup'>Instagram</FooterLink>
                        <FooterLink to='/'>LinkedIn</FooterLink>
                        <FooterLink to='/'>Facebook</FooterLink >  <FooterLink to='/'>Twitter</FooterLink>  <FooterLink to='/'>Youtube</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinksTitle>Account</FooterLinksTitle>
                        <FooterLink to='/signup'> Login</FooterLink>
                        <FooterLink to='/'>Phone Plans</FooterLink>
                        <FooterLink to='/'>Latest Smartphone</FooterLink >  <FooterLink to='/'>Bring Your Own Phone</FooterLink>  <FooterLink to='/'>Network Coverage</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        Chill Mobile<SocialIcon />
                    </SocialLogo>
                    <WebsiteRights> Chill Mobil ©2020</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target='_blank' aria-label="Facebook"><FaFacebook /></SocialIconLink>
                    
                        <SocialIconLink href='/' target='_blank' aria-label="Twitter"><FaTwitter /></SocialIconLink>
                    
                        <SocialIconLink href='/' target='_blank' aria-label="Instagram"><FaInstagram /></SocialIconLink>
                    
                        <SocialIconLink href='/' target='_blank' aria-label="Linkedin"><FaLinkedin /></SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>

        
    )
}


export default Footer