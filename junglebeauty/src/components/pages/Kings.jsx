import { Container, Row, Col } from 'react-bootstrap';
import CatCardCarousel from '../CatCardCarousel';
import CatProfile from './CatProfile';
import CatCard from '../CatCard';
import CatList from '../CatList';
import './../../App.css';

const Kings = () => {
    return (
      <CatCardCarousel cats={CatList.filter(cat => cat.type == 'king')}/>

      /*
      <Container fluid>
        <Row>
        {CatList.filter(cat => cat.type == 'king').map((cat) => {
          return (
            <Col md={{ span: 4, offset: 2 }} lg={{ span: 4, offset: 2 }}>
              <CatCard key={cat.id} cat={cat}/>
            </Col>
          )
        })}
        </Row>
    </Container>
    */
    );
  };

export default Kings;