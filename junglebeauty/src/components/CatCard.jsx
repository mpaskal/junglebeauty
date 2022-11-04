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
    var displayName = name;
    var description;

    if (type == 'kitten') {
        displayName += ' collar';
        description = date;
        if (sex == 'male') {
            displayName += ' boy';
        } else {
            displayName += ' girl';
        }
    } else if (type == 'king') {
        description = colour + ' ' + adj + ' Bengal';
    } else {
        description = cattery + ' ' + name + ' ' + date;
    }

    return (
        <>
            <div className='cat-card' onClick={handleShow}>
                <img className='cat-img' src={GetCatFilepath(cat) + '0.png'}/>
                <div className='cat-text'>
                    <h3>{displayName}</h3>
                    <p>{description}</p>
                </div>
            </div>

            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton/>
                <Modal.Body>
                    <CatProfile cat={cat}/>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default CatCard;