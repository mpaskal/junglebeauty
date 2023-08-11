import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import CatProfile from './KittenProfile';
import ParentProfile from './ParentProfile';
import CatImage from './CatImage';
import { getCatFilepath, getCatDescription } from './Functions';
import './../App.css';

const CatCard = ({ cat, size = 'large' }) => {
    const { name, sex, desc, mother } = cat;
    const type = `${mother ? 'kitten' : 'parent'}`;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const description = getCatDescription(cat);
    const displayName = `${name}${type === 'kitten' ? ` collar ${sex === 'male' ? `boy` : `girl`}` : ``}`;

    return (
        <>
            <div className='cat-card' onClick={handleShow}>
                <div className='cat-img-container'>
                    <CatImage filepath={getCatFilepath(cat) + '0.png'} card={true} alt={displayName}/>
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
                            <h5><b>{displayName}</b></h5>
                            <h5>{description}</h5>
                        </>
                    }
                </div>
            </div>

            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header className='profile-header' closeButton>
                    <Modal.Title className='profile-title'>
                        <h2>{displayName}</h2>
                    </Modal.Title>
                </Modal.Header>
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