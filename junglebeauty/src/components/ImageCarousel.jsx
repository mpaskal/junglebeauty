import { Component, useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import CatProfile from './KittenProfile';
import CatCard from './CatCard';
import CatImage from './CatImage';
import { GetAllImages } from './DBFunctions';
import './../App.css';

const ImageCarousel = ({ cat }) => {  
    const [images, setImages] = useState([]);

    const getData = async () => {
        const images = GetAllImages(cat);
        setImages(images);
      }
    
    useEffect(() => {
        getData();
    }, [])

    console.log('carousel');
    console.log(images);

  return (
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
                <CatImage filepath={image} />
            )
        })}
    </Carousel>
  );
};

export default ImageCarousel;