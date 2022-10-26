import { Image, Card } from 'react-bootstrap';
import './../App.css';

const CatCard = ({ cat }) => {
    const { id, name, type, colour, sex, adj, status, date, father, mother } = cat;
    var filepath = `/assets/${type}s`;

    if (type === 'kitten') {
        filepath += `/${date}`;
    }
    filepath += `/${name}/0.png`;

    return (
        <Card className='cat-card'>
            <Card.Img className='cat-img' src={filepath}/>
            <Card.Body>
                {
                    type === 'kitten' ? 
                    <>
                    <Card.Title>{name} collar {sex}. {date}</Card.Title>
                    <p>Mother: {mother}</p>
                    </>
                    :
                    <>
                    <Card.Title>{name}</Card.Title>
                    <p>{colour} {adj} Bengal</p>
                    </>
                }
            </Card.Body>
        </Card>
    )
}

export default CatCard;