import { Link } from "react-router-dom";
import JungleBeautyLogo from '../../assets/logo.png';
import './navigation.styles.css';

const Navigation = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo-link' to='/'>
                <img className='logo-img' src={JungleBeautyLogo}/>
                <h1 className='logo-text'>JungleBeauty Bengals</h1>
            </Link>
            
            <div className='nav-links-container'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/'>Queens</Link>
                <Link className='nav-link' to='/'>Kings</Link>
                <Link className='nav-link' to='/kittens'>Kittens</Link>
                <Link className='nav-link' to='/'>News</Link>
                <Link className='nav-link' to='/'>FAQ</Link>
                <Link className='nav-link' to='/'>About</Link>
                <Link className='nav-link' to='/'>Contact</Link>
                <Link className='nav-link' to='/'>How to buy</Link>
            </div>
        </div>
    )
}

export default Navigation;