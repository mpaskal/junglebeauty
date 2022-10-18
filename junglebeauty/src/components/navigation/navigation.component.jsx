import { Link, NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import React from 'react';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import JungleBeautyLogo from '../../assets/logo.png';
import './navigation.styles.css';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect fixed='top' expand='xl'>
            <Container fluid>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                
                    
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav>
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/'>Queens</Nav.Link>
                            <Nav.Link href='/'>Kings</Nav.Link>
                            <Nav.Link href='/kittens'>Kittens</Nav.Link>
                            <Nav.Link href='/'>News</Nav.Link>
                            <Nav.Link href='/'>FAQ</Nav.Link>
                            <Nav.Link href='/'>About</Nav.Link>
                            <Nav.Link href='/'>Contact</Nav.Link>
                            <Nav.Link href='/'>How to buy</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
    </Navbar>
      );
}

export default Navigation;