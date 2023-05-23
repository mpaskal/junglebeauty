import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { getCatFilepath, convertDate, getReleaseDate } from './Functions';
import { GetAllImages } from './FirebaseFunctions';
import ImageCarousel from "./ImageCarousel";
import VideoCarousel from './VideoCarousel';
import './../App.css';
import CatImage from './CatImage';

const KittenProfile= ({ cat = [] }) => {
    const { name, sex, date, father, mother, price, videos } = cat;
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
            <div className='kitten-columns-container'>
                <div className='profile-info-container'>
                    <h2>{name} collar {sex === 'male' ? 'boy' : 'girl'}</h2>
                    <h4>Born {birthDate}</h4>
                    <p>Mother: <Link to='/queens' state={mother}>{mother}</Link>, Father: <Link to='/kings' state={father}>{father}</Link></p>
                    <p>Date of release: {releaseDate <= currentDate ? 'ready to go!' : convertDate(releaseDate)}</p>
                    {price ? <p>Price: ${price}</p> : ''}

                    <ImageCarousel cat={cat} />
                </div>

                <div className='kitten-images-container'>
                    {images.map((image) => {
                        return (
                            <CatImage key={image} filepath={image} />
                        );
                    })}
                </div>
            </div>
            <div className='video-carousel-container'>
                <VideoCarousel videos={videos} />
            </div>
        </>
    );
}

export default KittenProfile;