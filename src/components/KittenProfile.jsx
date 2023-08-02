import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';
import { getCatFilepath, convertDate, getReleaseDate } from './Functions';
import { GetAllImages } from './FirebaseFunctions';
import ImageCarousel from "./ImageCarousel";
import VideoCarousel from './VideoCarousel';
import VideoFrame from './VideoFrame';
import './../App.css';
import CatImage from './CatImage';

const KittenProfile= ({ cat = [] }) => {
    const { name, sex, date, father, mother, price, video } = cat;
    const [images, setImages] = useState([]);
    const birthDate = convertDate(date);
    const releaseDate = getReleaseDate(date);
    const currentDate = new Date();

    const getData = async () => {
        const images = await GetAllImages(getCatFilepath(cat));
        setImages(images);
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
                            Mother: <Link to='/queens' state={mother}>{mother}</Link>, Father: <Link to='/kings' state={father}>{father}</Link>
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
            
        </>
    );
}

export default KittenProfile;