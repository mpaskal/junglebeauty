import React, { Fragment } from 'react';
import { Link, NavLink } from "react-router-dom";
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import JungleBeautyLogo from '../../assets/logo.png';
import './navigation.styles.css';

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
                        <Nav.Link className='nav-link' to='/'>Home</Nav.Link>
                        <Nav.Link className='nav-link' to='/'>Queens</Nav.Link>
                        <Nav.Link className='nav-link' to='/'>Kings</Nav.Link>
                        <Nav.Link className='nav-link' to='/kittens'>Kittens</Nav.Link>
                        <Nav.Link className='nav-link' to='/'>News</Nav.Link>
                        <Nav.Link className='nav-link' to='/'>FAQ</Nav.Link>
                        <Nav.Link className='nav-link' to='/'>About</Nav.Link>
                        <Nav.Link className='nav-link' to='/'>Contact</Nav.Link>
                        <Nav.Link className='nav-link' to='/'>How to buy</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
       
    );
}

export default Navigation;