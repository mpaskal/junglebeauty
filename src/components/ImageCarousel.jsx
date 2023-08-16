import { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import CatImage from './CatImage';
import { getCatFilepath } from './Functions';
import { getAllImages } from './FirebaseFunctions';
import './../App.css';

const ImageCarousel = ({ cat }) => {  
    const [images, setImages] = useState([]);

    const getData = async () => {
        const images = await getAllImages(getCatFilepath(cat));
        setImages(images);
    }
    
    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <Carousel 
                infinite
                responsive={{
                    desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: 1,
                    },
                    mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                    },
                    tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 1,
                    partialVisibilityGutter: 30    
                    }
                }}
                rewind={false}
                showDots
            >
                {images.map((image) => {
                    return (
                        <CatImage key={image} filepath={image} />
                    )
                })}
            </Carousel>

            {images.length === 0 &&
                <>
                    <CatImage filepath={'logo.png'} placeholder={true} />
                    <h4>This cat hasn't starred in any photos yet.</h4>
                </>
            }
        </>
  );
};

export default ImageCarousel;