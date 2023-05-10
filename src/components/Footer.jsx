import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import './../App.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='cert-container'>
                <a href='https://tica.org/bengal-breeders?view=article&id=2253:cattery-junglebeauty&catid=97' target='_blank' rel="noopener noreferrer">
                    <img className='cert' src='/assets/certifications/TICA-75-2.png' />
                </a>
                <a href='https://www.cca-afc.com/Breeds/Breeders' target='_blank' rel="noopener noreferrer">
                  <img className='cert' src='/assets/certifications/CCA_logo_h75.png' />
                </a>
                <a href='https://bengalcatclub.com/bengal-cat-breeders/canada-ontario/' target='_blank' rel="noopener noreferrer">
                    <img className='cert' src='/assets/certifications/BCC-Certified-Breeder.png' />
                </a>
                <a href='https://royalcanin.com/' target='_blank' rel="noopener noreferrer">
                    <img className='cert' src='/assets/certifications/royalcanin.png' />
                </a>
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