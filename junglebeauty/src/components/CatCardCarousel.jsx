import { Component, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import CatProfile from './CatProfile';
import CatCard from './CatCard';
import CatList from './CatList';
import { GetCatFilepath } from './Functions';
import './../App.css';

const CatCardCarousel = ({ cats }) => {
  return (
    <Carousel className='cat-card-carousel'
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