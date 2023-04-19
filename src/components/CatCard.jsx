import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import CatProfile from './KittenProfile';
import ParentProfile from './ParentProfile';
import CatImage from './CatImage';
import { GetCatFilepath, GetCatDescription } from './Functions';
import './../App.css';

const CatCard = ({ cat }) => {
    const { name, type, sex, } = cat;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const description = GetCatDescription(cat);
    const displayName = `${name}${type == 'kitten' ? ` collar ${sex == 'male' ? `boy` : `girl`}` : ``}`;

    return (
        <>
            <div className='cat-card' onClick={handleShow}>
                <CatImage className='cat-img' filepath={GetCatFilepath(cat) + '0.png'} alt={displayName}/>
                <div className='cat-text'>
                    <h3>{displayName}</h3>
                    <h4>{description}</h4>
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