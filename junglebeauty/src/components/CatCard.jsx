import { Component, useState } from 'react';
import { Image, Card, Modal, Carousel, CarouselItem } from 'react-bootstrap';
import CatProfile from './pages/CatProfile';
import { GetCatURL, GetCatFilepath } from './Functions';
import './../App.css';

const CatCard = ({ cat }) => {
    const { id, name, type, colour, sex, adj, status, date, father, mother, cattery, location } = cat;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className='cat-card' onClick={handleShow}>
                <img className='cat-img' src={GetCatFilepath(cat) + '0.png'}/>
                <div className='cat-text'>
                    <h3>{cat.name} collar {cat.sex == 'male' ? 'boy' : 'girl'}. {cat.date}</h3>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton/>
                <Modal.Body>
                <CatProfile cat={cat}/>
                </Modal.Body>
            </Modal>
        </>

          /*
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
        */
    )
}

export default CatCard;