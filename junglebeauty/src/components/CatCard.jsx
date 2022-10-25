import { Image } from 'react-bootstrap';
import './../App.css';

const CatCard = ({ cat }) => {
    const { id, name, type, colour, gender, adj, status, date, father, mother } = cat;

    return (
        <div className='page-background'>
            <img src={`/assets/${type}s/${date}/${name}/0.png`}/>
            <h1>{name} collar {gender}</h1>
        </div>
    )
}

export default CatCard;