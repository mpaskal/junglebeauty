import { Component, useState } from 'react';
import { Image, Card, Modal, Carousel, CarouselItem } from 'react-bootstrap';
import CatProfile from './KittenProfile';
import ParentProfile from './ParentProfile';
import { GetCatURL, GetCatFilepath, GetCatDescription, ConvertDate } from './Functions';
import { GetImage } from './DBFunctions';
import './../App.css';

const CatCard = ({ cat }) => {
    const { id, name, type, colour, sex, adj, date, cattery, location } = cat;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const description = GetCatDescription(cat);
    const displayName = `${name}${type == 'kitten' ? ` collar {${sex == 'male' ? `boy` : `girl`}}` : ``}`;

    return (
        <>
            <div className='cat-card' onClick={handleShow}>
                <img className='cat-img' src={GetImage(GetCatFilepath(cat) + '0.png')} alt={displayName}/>
                <div className='cat-text'>
                    <h3>{displayName}</h3>
                    <p>{description}</p>
                </div>
            </div>

            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton/>
                <Modal.Body>
                    {type == 'kitten'
                        ? <CatProfile cat={cat}/>
                        : <ParentProfile cat={cat}/>
                    }
                </Modal.Body>
            </Modal>
        </>
    );
}

export default CatCard;