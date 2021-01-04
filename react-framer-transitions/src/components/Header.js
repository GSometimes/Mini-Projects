import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Navbar = styled.nav`
    height: 60px;
    background: #000;
    padding: 0rem calc((100vw - 1300px) /2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    `;

const Logo = styled(Link)`
    color: #6B0504;
    padding-left: 1.5rem;
    text-decoration: none;
    font-size: 2rem;
    font-weight: bold;
    font-style: italic;`;

const NavItems = styled.div``;

const NavbarLink = styled(Link)`
    color: #6B0504;
    text-decoration: none;
    padding: 1rem;
    font-weight: bold;
    `;

const Header = () => {
    return (
        <Navbar>
        <Logo to="/">It's Frickin' Cats</Logo>
            <NavItems>
                <NavbarLink to="/">Home</NavbarLink>
                <NavbarLink to="/about">About</NavbarLink>
                <NavbarLink to="/services">Services</NavbarLink>
            </NavItems>
        </Navbar>
    )
}

export default Header
