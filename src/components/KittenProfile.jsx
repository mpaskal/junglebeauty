import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { GetCatFilepath, ConvertDate, GetReleaseDate } from './Functions';
import { GetAllImages,  } from './FirebaseFunctions';
import ImageCarousel from "./ImageCarousel";
import VideoCarousel from './VideoCarousel';
import './../App.css';
import CatImage from './CatImage';

const KittenProfile= ({ cat = [] }) => {
    const { id, name, type, colour, sex, adj, status, date, father, mother, price, videos } = cat;
    const [images, setImages] = useState([]);
    const filepath = GetCatFilepath(cat);
    const birthDate = ConvertDate(date);
    const releaseDate = GetReleaseDate(date);
    const currentDate = new Date();

    const getData = async () => {
        const images = await GetAllImages(GetCatFilepath(cat));
        setImages(images);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className='kitten-columns-container'>
            <div>
                <h2>{name} collar {sex == 'male' ? 'boy' : 'girl'}</h2>
                <h4>Born {birthDate}</h4>
                <p>Mother: <Link to='/queens' state={mother}>{mother}</Link>, Father: <Link to='/kings' state={father}>{father}</Link></p>
                <p>Date of release: {releaseDate <= currentDate ? 'ready to go!' : ConvertDate(releaseDate)}</p>
                {price ? <p>Price: ${price}</p> : ''}

                <ImageCarousel cat={cat} />
                <VideoCarousel videos={videos} />
            </div>

            <div className='kitten-images-container'>
                {images.map((image) => {
                    return (
                        <CatImage key={image} filepath={image} />
                    );
                })}
            </div>
        </div>
    );
}

export default KittenProfile;