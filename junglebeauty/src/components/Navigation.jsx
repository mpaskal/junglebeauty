import React, { Fragment } from 'react';
import { Link, NavLink } from "react-router-dom";
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './../App.css';

const Navigation = () => {
    return (
            <Navbar collapseOnSelect className='nav-bar' expand="lg" variant='dark' bg='dark'>
                <Container>
                    <Navbar.Brand className='logo-link' to='/'>
                        <img className='logo-img' src='/assets/logo.png'/>
                        <h1 className='logo-text'>JungleBeauty Bengals</h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className='ml-auto'>
                            <Link className='nav-link' to='/'>Home</Link>
                            <Link className='nav-link' to='/queens'>Queens</Link>
                            <Link className='nav-link' to='/kings'>Kings</Link>
                            <Link className='nav-link' to='/kittens'>Available</Link>
                            <Link className='nav-link' to='/news'>News</Link>
                            <Link className='nav-link' to='/faq'>FAQ</Link>
                            <Link className='nav-link' to='/about-us'>About</Link>
                            <Link className='nav-link' to='/contact'>Contact</Link>
                            <NavDropdown title='How to buy'>
                                <Link className='dropdown-link' to='/why-choose-junglebeauty'>Why choose JungleBeauty</Link>
                                <NavDropdown.Divider/>
                                <Link className='dropdown-link' to='/buy-sell-agreement'>Buy-Sell Agreement</Link>
                                <NavDropdown.Divider/>
                                <Link className='dropdown-link' to='/price'>Price</Link>
                                <NavDropdown.Divider/>
                                <Link className='dropdown-link' to='/preparing-for-coming-kitten'>How to be ready for coming kitten</Link>
                                <NavDropdown.Divider/>
                                <Link className='dropdown-link' to='/visit-junglebeauty'>How to visit JungleBeauty</Link>
                            </NavDropdown>
                        </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
       
    );
}

export default Navigation;