import { Image } from 'react-bootstrap';
import './../App.css';

const CatCard = ({ cat }) => {
    const { id, name, type, colour, sex, adj, status, date, father, mother } = cat;
    var filepath = `/assets/${type}s`;

    if (type === 'kitten') {
        filepath += `/${date}`;
    }
    filepath += `/${name}/0.png`;

    return (
        <div className='cat-card'>
            <img className='cat-img' src={filepath}/>
            {
                type === 'kitten' ? 
                <>
                <h2>{name} collar {sex}. {date}</h2>
                <p>Mother: {mother}</p>
                </>
                :
                <>
                <h2>{name}</h2>
                <p>{colour} {adj} Bengal</p>
                <p>{filepath}</p>
                </>
            }
            
        </div>
    )
}

export default CatCard;