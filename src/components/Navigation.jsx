import React from 'react';
import { Link, NavLink } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './../App.css';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect className='nav-bar' expand='xl' variant='dark' bg='dark'>
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
                        <NavLink exact className='nav-link' as={Link} to='/' eventKey='0'>Home</NavLink>
                        <NavLink exact className='nav-link' as={Link} to='/queens' eventKey='1'>Queens</NavLink>
                        <NavLink exact className='nav-link' as={Link} to='/kings' eventKey='2'>Kings</NavLink>
                        <NavLink exact className='nav-link' as={Link} to='/kittens' eventKey='3'>Kittens</NavLink>
                        <NavLink exact className='nav-link' as={Link} to='/news' eventKey='4'>News</NavLink>
                        <NavLink exact className='nav-link' as={Link} to='/faq' eventKey='5'>FAQ</NavLink>
                        <NavLink exact className='nav-link' as={Link} to='/about-us' eventKey='6'>About</NavLink>
                        <NavLink exact className='nav-link' as={Link} to='/contact' eventKey='7'>Contact</NavLink>
                        <NavDropdown className='nav-dropdown' variant='dark' title='How to buy'>
                            <div className='dropdown-links-container'>
                                <NavLink exact className='dropdown-link' as={Link} to='/why-choose-junglebeauty' eventKey='7'>Why choose JungleBeauty</NavLink>
                                <NavDropdown.Divider/>
                                <NavLink exact className='dropdown-link' as={Link} to='/buy-sell-agreement' eventKey='8'>Buy-Sell Agreement</NavLink>
                                <NavDropdown.Divider/>
                                <NavLink exact className='dropdown-link' as={Link} to='/price' eventKey='9'>Price</NavLink>
                                <NavDropdown.Divider/>
                                <NavLink exact className='dropdown-link' as={Link} to='/preparing-for-coming-kitten' eventKey='10'>How to be ready for coming kitten</NavLink>
                                <NavDropdown.Divider/>
                                <NavLink exact className='dropdown-link' as={Link} to='/visit-junglebeauty' eventKey='11'>How to visit JungleBeauty</NavLink>
                            </div>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
       
    );
}

export default Navigation;