import { Component, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import CatProfile from './KittenProfile';
import CatCard from './CatCard';
import { GetCatFilepath } from './Functions';
import './../App.css';

const CatCardCarousel = ({ cats, autoplay = false }) => {  
  return (
    <Carousel className='cat-card-carousel'
      autoPlay={autoplay}
      autoPlaySpeed={4000}
      draggable
      infinite
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024
          },
          items: 3,
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
          items: 2,
          partialVisibilityGutter: 30    
        }
      }}
      rewind={false}
      showDots
      >

      {cats.map((cat) => {
        return (
          <div key={cat.id}>
            <CatCard cat={cat}/>
          </div>
        )
      })}
    </Carousel>
  );
};

export default CatCardCarousel;