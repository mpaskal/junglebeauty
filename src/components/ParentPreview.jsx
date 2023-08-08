import { Link } from 'react-router-dom';
import { Accordion, Row, Col } from 'react-bootstrap';
import { useCats } from '../contexts/CatsContext';
import CatCardCarousel from './CatCardCarousel';
import ImageCarousel from './ImageCarousel';
import { getCatDescription } from './Functions';
import './../App.css';

const ParentPreview= ({ parentName }) => {
    const cats = useCats();
    const cat = cats.parents.find(cat => cat.name === parentName);

    if (!cat) {
        return;
    }

    const { name, sex } = cat;

    return (
        <div className='cat-columns-container'>
            <h2>{name}</h2>

            <ImageCarousel cat={cat} />

            <br />
            <Link to={sex === 'male' ? '/kings' : '/queens'} state={name}>
                <h4>
                    Click here to see {name}'s kittens
                </h4>
            </Link>
        </div>
    );
}

export default ParentPreview;