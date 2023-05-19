import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import CatProfile from './KittenProfile';
import ParentProfile from './ParentProfile';
import CatImage from './CatImage';
import { GetCatFilepath, GetCatDescription } from './Functions';
import './../App.css';

const CatCard = ({ cat, size = 'large' }) => {
    const { name, type, sex, desc } = cat;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const description = GetCatDescription(cat);
    const displayName = `${name}${type === 'kitten' ? ` collar ${sex === 'male' ? `boy` : `girl`}` : ``}`;

    return (
        <>
            <div className='cat-card' onClick={handleShow}>
                <div className='cat-img-container'>
                    <CatImage filepath={GetCatFilepath(cat) + '0.png'} clickable={false} alt={displayName}/>
                </div>
                <div className='cat-text'>
                    {size === 'large' ?
                        <>
                            <h3><b>{displayName}</b></h3>
                            <h4>{description}</h4>
                            <p>{desc}</p>
                        </>
                    :
                        <>
                            <h4><b>{displayName}</b></h4>
                            <h5>{description}</h5>
                        </>
                    }
                </div>
            </div>

            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton/>
                <Modal.Body>
                    {type === 'kitten'
                        ? <CatProfile cat={cat}/>
                        : <ParentProfile cat={cat}/>
                    }
                </Modal.Body>
            </Modal>
        </>
    );
}

export default CatCard;