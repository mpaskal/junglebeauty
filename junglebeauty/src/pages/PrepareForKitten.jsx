import { Row, Col } from 'react-bootstrap';
import './../App.css';

const PrepareForKitten = () => {
    return (
      <div className='page-background'>
        <h1>How to be ready for your new kitten from JungleBeauty Bengals Cattery</h1>
        <br/>
        <ol className='list-container'>
          <li>
            <Row className='item-container'>
              <Col>
                You need a carrier for the kitten to bring them home safely and take them to the vet clinic later on.
                We recommend having a carrier of the size for the full grown cat. It can be a soft carrier or a plastic carrier. We suggest having a double door carrier; here is an example:
                <p/>
              </Col>
              <Col xl={3}>
                <img className='side-img' src='https://bengalcats.ca/img/Site/Ready/top-load%20carrier.jpg'/>
              </Col>
            </Row>
          </li><li>
            <Row className='item-container'>
              <Col>
                You need a litter box for the kitten. For example:
                <p/>
                Note: our kittens are trained to use different litter boxes - from simple tray to top open and house-like.
                <p/>
              </Col>
              <Col xl={3}>
                <img className='side-img' src='https://bengalcats.ca/img/Site/Ready/cat_litter_box.jpg'/>
              </Col>
            </Row>
          </li><li>
            <Row className='item-container'>
              <Col>
                You need litter for the kitten. For example, Clumping Wood Litter from ökocat:
                <p/>
              </Col>
              <Col xl={3}>
                <img className='side-img' src='https://bengalcats.ca/img/Site/Ready/ococat.jpg'/>
              </Col>
            </Row>
          </li>
        </ol>
      </div>
    );
  };

export default PrepareForKitten;