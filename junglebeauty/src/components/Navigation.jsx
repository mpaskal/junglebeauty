import React, { Fragment } from 'react';
import { Link, NavLink } from "react-router-dom";
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import JungleBeautyLogo from '../assets/logo.png';
import './../App.css';

const Navigation = () => {
    return (
            <Navbar collapseOnSelect className='nav-bar' expand="lg" variant='light'>
                <Container>
                    <Navbar.Brand className='logo-link' to='/'>
                        <img className='logo-img' src={JungleBeautyLogo}/>
                        <h1 className='logo-text'>JungleBeauty Bengals</h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav>
                        <Link className='nav-link' to='/'>Home</Link>
                        <Link className='nav-link' to='/'>Queens</Link>
                        <Link className='nav-link' to='/'>Kings</Link>
                        <Link className='nav-link' to='/kittens'>Kittens</Link>
                        <Link className='nav-link' to='/'>News</Link>
                        <Link className='nav-link' to='/'>FAQ</Link>
                        <Link className='nav-link' to='/'>About</Link>
                        <Link className='nav-link' to='/'>Contact</Link>
                        <Link className='nav-link' to='/'>How to buy</Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
       
    );
}

export default Navigation;