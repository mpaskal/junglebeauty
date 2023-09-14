import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AccordionMenu from '../components/AccordionMenu';
import ReasonsList from '../lists/ReasonsList';
import './../App.css';

const WhyChoose = () => {
    return (
      <div className='page-background'>
          <Row className='columns-container'>
              <Col>
                <h1 className='page-header padded-header'>Choice making - why JungleBeauty Bengal Cattery?</h1>
                <h2 className='page-subheader padded-header'>There are many good reasons!</h2>

                <AccordionMenu items={ReasonsList} />
                
              </Col>
              <Col sm={3}>
                <Link className='text-link' to='/kittens'>
                  <img className='side-img' src={'/assets/Kittens/graduated.png'} alt='Brown Bengal kitten sitting on a cat tree'/>
                  <p>See available kittens</p>
                </Link>
                <h2 className='page-subheader padded-header'>How to reserve a kitten</h2>
                <p>
                  After you have looked at the kitten online and made a choice, please inform us that you are ready to reserve them.
                </p><p>
                  Then we send a Deposit Agreement to your email box. The agreement contains the name of the TICA registered Junglebeauty Cattery and name, date of birth, gender, breed, price, dates of release of the kitten, and parties' responsibilities.
                </p><p>
                  After you sign the Agreement, you have to send it to us.
                </p><p>
                  Then you transfer the deposit money to the email box specified in the agreement. When we get the funds deposited in our bank account, we sign the agreement on our part and send it to you.
                </p><p>
                  From then on, the kitten is reserved for you!
                </p>
              </Col>
          </Row>
        </div>
    );
  };

export default WhyChoose;