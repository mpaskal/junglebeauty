import { MDBFooter, MDBContainer, MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import './../App.css';

const Footer = () => {
    return (
        <MDBFooter className='footer'>
            <MDBContainer className='cert-container'>
                <img className='cert' src='/assets/certifications/TICA-75-2.png'/>
                <img className='cert' src='/assets/certifications/BCC-Certified-Breeder.png'/>
                <img className='cert' src='/assets/certifications/royalcanin.png'/>
            </MDBContainer>
            <MDBContainer className='social-container'>
                <MDBBtn outline color='light' role='button' url='https://www.instagram.com/junglebeautybengals'>
                    <MDBIcon fab icon='instagram'/>
                </MDBBtn>
                <MDBBtn outline color='light' role='button' url='https://www.facebook.com/junglebeautybengals'>
                    <MDBIcon fab icon='facebook-f'/>
                </MDBBtn>
                <MDBBtn outline color='light' role='button' url='https://www.youtube.com/channel/UC5BbWtEY3t_uSvq6EZag9iA'>
                    <MDBIcon fab icon='youtube'/>
                </MDBBtn>
            </MDBContainer>
            <MDBContainer>
                <p>JungleBeautyBengals. Copyright © 2022</p>
            </MDBContainer>
        </MDBFooter>
    )
}

export default Footer;