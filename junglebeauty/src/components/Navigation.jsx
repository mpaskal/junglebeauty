import React, { Fragment } from 'react';
import { Link, NavLink } from "react-router-dom";
import { Button, Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './../App.css';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect className='nav-bar' expand="lg" variant='dark' bg='dark'>
            <Container>
                <Link to='/'>
                    <Navbar.Brand className='logo-link'>
                        <img className='logo-img' src='/assets/logo.png'/>
                        <h1 className='logo-text'>JungleBeauty Bengals</h1>
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='ml-auto'>
                        <NavLink className='nav-link' to='/' end>Home</NavLink>
                        <NavLink className='nav-link' to='/queens'>Queens</NavLink>
                        <NavLink className='nav-link' to='/kings'>Kings</NavLink>
                        <NavLink className='nav-link' to='/kittens'>Kittens</NavLink>
                        <NavLink className='nav-link' to='/news'>News</NavLink>
                        <NavLink className='nav-link' to='/faq'>FAQ</NavLink>
                        <NavLink className='nav-link' to='/about-us'>About</NavLink>
                        <NavLink className='nav-link' to='/contact'>Contact</NavLink>
                        <NavDropdown className='nav-dropdown' variant='dark' title='How to buy'>
                            <NavLink className='dropdown-link' to='/why-choose-junglebeauty'>Why choose JungleBeauty</NavLink>
                            <NavDropdown.Divider/>
                            <NavLink className='dropdown-link' to='/buy-sell-agreement'>Buy-Sell Agreement</NavLink>
                            <NavDropdown.Divider/>
                            <NavLink className='dropdown-link' to='/price'>Price</NavLink>
                            <NavDropdown.Divider/>
                            <NavLink className='dropdown-link' to='/preparing-for-coming-kitten'>How to be ready for coming kitten</NavLink>
                            <NavDropdown.Divider/>
                            <NavLink className='dropdown-link' to='/visit-junglebeauty'>How to visit JungleBeauty</NavLink>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
       
    );
}

export default Navigation;