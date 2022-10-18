import BccCert from '../../assets/certifications/BCC-Certified-Breeder.png';
import RoyalCaninCert from '../../assets/certifications/royalcanin.png';
import TicaCert from '../../assets/certifications/TICA-75-2.png';
import './footer.styles.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='cert-container'>
                <img className='cert' src={TicaCert}/>
                <img className='cert' src={BccCert}/>
                <img className='cert' src={RoyalCaninCert}/>
            </div>
        </div>
    )
}

export default Footer;