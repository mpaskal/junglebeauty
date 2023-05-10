import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import './../App.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='cert-container'>
                <img className='cert' src='/assets/certifications/TICA-75-2.png' />
                <img className='cert' src='/assets/certifications/CCA_logo_h75.png' />
                <img className='cert' src='/assets/certifications/BCC-Certified-Breeder.png' />
                <img className='cert' src='/assets/certifications/royalcanin.png' />
            </div>
            <div className='social-container'>
                <a className='social-icon' href='https://www.instagram.com/junglebeautybengals' target='_blank' rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a className='social-icon' href='https://www.facebook.com/junglebeautybengals' target='_blank' rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a className='social-icon' href='https://www.youtube.com/channel/UC5BbWtEY3t_uSvq6EZag9iA' target='_blank' rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faYoutube} />
                </a>
            </div>
            <div>
                <small>JungleBeautyBengals. Copyright © {new Date().getFullYear()}</small>
            </div>
        </div>
    );
}

export default Footer;