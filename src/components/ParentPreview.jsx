import { Link } from 'react-router-dom';
import { useCats } from '../contexts/CatsContext';
import ImageCarousel from './ImageCarousel';
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