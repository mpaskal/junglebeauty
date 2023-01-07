import { Component, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import CatProfile from './KittenProfile';
import CatCard from './CatCard';
import { GetCatFilepath } from './Functions';
import './../App.css';

const ImageCarousel = ({ images }) => {  
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
                <img className='cat-img' key={image} src={image}/>
            )
        })}
    </Carousel>
  );
};

export default ImageCarousel;