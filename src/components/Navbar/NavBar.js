import React, {useState, useEffect} from 'react';
import {Button} from '../../GlobalStyles';
import {animateScroll as scroll} from 'react-scroll';
import { FaBars, FaTimes} from "react-icons/fa";
import { IconContext} from "react-icons/lib";
import myLogo from '../../assets/chill_mobile_logo.png';
import { Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon, 
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink,
    Form,
    FormInput 
} from './NavBar.elements';


const NavBar = () => {

const [click, setClick] = useState(false);
const [button, setButton] = useState(true);
const closeMobileMenu = () => setClick(false);
const handleClick = () => setClick(!click);

const showButton = () => {
    if(window.innerWidth <= 960) {
        setButton(false)
    } else {
        setButton(true)
    }
}

const toggleHome = () => {
    scroll.scrollToTop();
}

useEffect(() => {
    showButton()
}, [])

window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
        <Nav> 
            <NavbarContainer>
                <NavLogo to="/" onClick={closeMobileMenu}>
                    <NavIcon onClick={toggleHome}src={myLogo}/>
                
                </NavLogo>
                <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </MobileIcon>
                <NavMenu onClick={handleClick} click={click}>
                
                    
                    
                    <NavItem>
                    <NavLinks to="/about">About</NavLinks>
                       
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/service'>Service</NavLinks>
                       
                    </NavItem>
                    <NavItem>
                    <NavLinks to='/phone'>Phone</NavLinks>
                       
                    </NavItem>
                    <NavItem>
                    <NavLinks to='/account'>Account</NavLinks>
                       
                    </NavItem>
                    
                    <NavItemBtn>
                        {button ? (
                            <NavBtnLink to="/signup">
                                <Button primary>SIGN UP</Button>
                            </NavBtnLink>
                        ) : (
                            <NavBtnLink to='/signup'>
                                <Button  onClick={closeMobileMenu} fontBig primary>
                                    SIGN UP
                                </Button>
                            </NavBtnLink>
                        )}
                    </NavItemBtn>
                    </NavMenu>
                
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </>
    );
};

export default NavBar;



