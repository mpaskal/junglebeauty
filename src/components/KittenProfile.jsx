import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Row, Col, Modal } from 'react-bootstrap';
import { useCats } from '../contexts/CatsContext';
import { getCatFilepath, convertDate, getReleaseDate } from './Functions';
import { GetAllImages } from './FirebaseFunctions';
import ImageCarousel from "./ImageCarousel";
import VideoCarousel from './VideoCarousel';
import VideoFrame from './VideoFrame';
import './../App.css';
import CatImage from './CatImage';
import ParentPreview from './ParentPreview';

const KittenProfile= ({ cat = [] }) => {
    const { name, sex, date, father, mother, price, video } = cat;
    const [images, setImages] = useState([]);
    const [show, setShow] = useState(false);
    const [previewParent, setPreviewParent] = useState();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const birthDate = convertDate(date);
    const releaseDate = getReleaseDate(date);
    const currentDate = new Date();

    const getData = async () => {
        const images = await GetAllImages(getCatFilepath(cat));
        setImages(images);
    }

    const openParentPreview = (parent) => {
        setPreviewParent(parent);
        handleShow();
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <div className='cat-columns-container'>
                <Row className='profile-info-container'>
                    <Col sm={5}>
                        <h2>{name} collar {sex === 'male' ? 'boy' : 'girl'}</h2>
                        <h4>Born {birthDate}</h4>
                    </Col>
                    <Col sm={5} className='cat-info-right-col'>
                        <h5>
                            Mother: <Link onClick={() => openParentPreview(mother)}>{mother}</Link>, Father: <Link onClick={() => openParentPreview(father)}>{father}</Link>
                            <br />
                            Date of release: {releaseDate <= currentDate ? 'ready to go!' : convertDate(releaseDate)}
                        </h5>
                        {price ? <p>Price: ${price}</p> : ''}
                    </Col>
                </Row>

                <div className='carousel-container'>
                    <ImageCarousel cat={cat} />
                    {video &&
                        <div className='video-frame-container'>
                            <VideoFrame id={video} />
                        </div>
                    }
                </div>

                <div className='kitten-images-container'>
                    {images.map((image) => {
                        return (
                            <CatImage key={image} filepath={image} />
                        );
                    })}
                </div>
            </div>
            
            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton/>
                <Modal.Body>
                    <ParentPreview parentName={previewParent}/>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default KittenProfile;