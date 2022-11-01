import { Image, Card, Carousel, CarouselItem } from 'react-bootstrap';
import './../App.css';
import { GetCatURL, GetCatFilepath } from './Functions';

const CatCard = ({ cat }) => {
    const { id, name, type, colour, sex, adj, status, date, father, mother, cattery, location } = cat;

    return (
        <a to={`/${type}-${name}`}>
            <Card className='cat-card'>
                <Card.Img className='cat-img' src={GetCatFilepath(cat) + '0.png'}/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    {
                        type === 'king' ? 
                        <p>{colour} {adj} Bengal</p>
                        :
                        <p>{cattery} {name}, born {date}, {location}</p>
                    }
                </Card.Body>
            </Card>
        </a>
    )
}

export default CatCard;