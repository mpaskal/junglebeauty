import BccCert from '../assets/certifications/BCC-Certified-Breeder.png';
import RoyalCaninCert from '../assets/certifications/royalcanin.png';
import TicaCert from '../assets/certifications/TICA-75-2.png';
import { SocialIcon } from 'react-social-icons';
import './../App.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='cert-container'>
                <img className='cert' src={TicaCert}/>
                <img className='cert' src={BccCert}/>
                <img className='cert' src={RoyalCaninCert}/>
            </div>
            <div className='social-container'>
                <SocialIcon className='social-icon' url='https://www.instagram.com/junglebeautybengals/' fgColor='white'/>
                <SocialIcon className='social-icon' url='https://www.facebook.com/junglebeautybengals' fgColor='white'/>
                <SocialIcon className='social-icon' url='https://www.youtube.com/channel/UC5BbWtEY3t_uSvq6EZag9iA' fgColor='white'/>
            </div>
            <p>JungleBeautyBengals. Copyright © 2022</p>
        </div>
    )
}

export default Footer;