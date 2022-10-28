import { Image, Card, Carousel, CarouselItem } from 'react-bootstrap';
import './../App.css';
import { GetCatURL, GetCatFilepath } from './Functions';

const CatCard = ({ cat }) => {
    const { id, name, type, colour, sex, adj, status, date, father, mother } = cat;

    return (
        <a to={GetCatURL(cat)}>
            <Card className='cat-card'>
                <Card.Img className='cat-img' src={GetCatFilepath(cat)}/>
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
        </a>
    )
}

export default CatCard;