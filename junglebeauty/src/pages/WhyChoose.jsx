import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './../App.css';

const WhyChoose = () => {
    return (
      <div className='page-background'>
          <Row className='columns-container'>
              <Col>
                <h1>Choice making - why JungleBeauty Bengal Cattery?</h1>
                <h3>There are many good reasons!</h3>
                <br/>
                <h3>Choice</h3>
                <p>
                  You can choose a kitten that was born for you among other beautiful Bengal kittens.
                </p><p>
                  Due to the regular litters from our various queens, you have a chance to see different patterns and characteristics and choose the kitten that resonates with you most, whether it is a pattern on their back, the glow in their eyes or the spring in their step!
                </p>
                <h3>Predictability</h3>
                <p>
                  You will get a kitten that exemplifies what you want in a companion.
                </p><p>
                  You can see the kitten's parents and siblings.
                </p><p>
                  You will know what to expect in the future after 1-2 years, like size, patterns, appearance, temperament, health, etc.
                </p>
                <h3>Health</h3>
                <p>
                  Buying a kitten from Junglebeauty Cattery means you know the parents' history, their health and genes, and their temperament.
                </p><p>
                  You will get a <Link className='text-link' to='/price'>health warranty</Link> for the Kitten.
                </p><p>
                  Your furriend will not die suddenly from the congenital disorder at the age of 2-3 years.
                </p>
                <h3>Desexing</h3>
                <p>
                  All our kittens come to the forever home after spaying/neutering procedures.
                </p><p>
                  We do it at respectful vet clinics at the when the kitten's age is 11-14 weeks old. It is a very safe and painless surgery.
                </p><p>
                  Then our kittens grow without any sexual behaviour or unpleasant actions like yelling, making markers, and illnesses specific to Bengal female cats like pyometra.
                </p>
                <h3>Our support</h3>
                <p>
                  We stay in touch with our customers after they take home a kitten and are ready to answer any questions.
                </p><p>
                  We know the breed and want only the best for Kitten and you.
                </p>
              </Col>
              <Col sm={3}>
                <Link className='text-link' to='/kittens'>
                  <img className='side-img' src={'/assets/kittens/graduated.png'}/>
                  <p>See available kittens</p>
                </Link>
                <h3>How to reserve a kitten</h3>
                <p>
                  After you have looked at the kitten online and made a choice, you will inform us that you are ready to reserve them.
                </p><p>
                  Then we send a Deposit Agreement to your email box. The agreement contains the name of the TICA registered Junglebeauty Cattery and name, date of birth, gender, breed, price, dates of release of the kitten, and parties responsibilities.
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