import { Accordion, Row, Col } from 'react-bootstrap';
import { useCats } from '../contexts/CatsContext';
import CatCardCarousel from './CatCardCarousel';
import ImageCarousel from './ImageCarousel';
import { getCatDescription } from './Functions';
import './../App.css';

const ParentProfile= ({ cat = [] }) => {
    const { name, sex } = cat;
    const kittens = useCats().kittens.filter((kitten) => (sex === 'male' ? kitten.father : kitten.mother) === name);
    const description = getCatDescription(cat);  
    var availableKittens = [];
    var graduatedKittens = [];

    /*
    const getData = async () => {
        const kittens = await QueryCats('kittens', [sex === 'male' ? 'father' : 'mother', '==', name]);
        setKittens(kittens);
      }
    
    useEffect(() => {
        getData();
    }, [])
    */

    availableKittens = kittens.filter(kitten => kitten.status === 'available').sort((a, b) => a.date > b.date ? -1 : 1);
    graduatedKittens = kittens.filter(kitten => kitten.status === 'graduated').sort((a, b) => a.date > b.date ? -1 : 1);

    return (
        <div className='cat-columns-container'>
            <Row className='profile-info-container'>
                <Col sm={5}>
                    <h2>{name}</h2>
                </Col>
                <Col sm={5}>
                    <h3>{description}</h3>
                </Col>
            </Row>

            <ImageCarousel cat={cat} />

            <Accordion className='accordion' defaultActiveKey={[0, 1]} alwaysOpen>
                {availableKittens.length > 0 &&
                    <Accordion.Item className='accordion-item' eventKey={0}>
                        <Accordion.Header className='accordion-header'>
                            <h5 className='accordion-header-text'>{name}'s available kittens:</h5>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div>
                                <CatCardCarousel cats={availableKittens}/>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                }
                {graduatedKittens.length > 0 &&
                    <Accordion.Item className='accordion-item' eventKey={1}>
                        <Accordion.Header className='accordion-header'>
                            <h5 className='accordion-header-text'>{name}'s graduated kittens:</h5>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div>
                                <CatCardCarousel cats={graduatedKittens}/>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                }
                
            </Accordion>
        </div>
    );
}

export default ParentProfile;