import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import JungleBeautyLogo from '../../assets/logo.png';
import './navigation.styles.css';

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-link' to='/'>
                    <img className='logo-img' src={JungleBeautyLogo}/>
                </Link>
                
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/'>Home</Link>
                    <Link className='nav-link' to='/'>Queens</Link>
                    <Link className='nav-link' to='/'>Kings</Link>
                    <Link className='nav-link' to='/'>Kittens</Link>
                    <Link className='nav-link' to='/'>News</Link>
                    <Link className='nav-link' to='/'>FAQ</Link>
                    <Link className='nav-link' to='/'>About</Link>
                    <Link className='nav-link' to='/'>Contact</Link>
                    <Link className='nav-link' to='/'>How to buy</Link>
                </div>
            </div>
        </Fragment>
    )
}

export default Navigation;