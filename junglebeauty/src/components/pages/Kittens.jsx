import { Component, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import CatCardCarousel from '../CatCardCarousel';
import CatProfile from './CatProfile';
import CatCard from '../CatCard';
import CatList from '../CatList';
import { GetCatFilepath } from '../Functions';
import './../../App.css';

const Kittens = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <CatCardCarousel cats={CatList.filter(cat => cat.status == 'available')}/>

    /*
    <Carousel 
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

      {CatList.filter(cat => cat.status == 'available').map((cat) => {
        return (
            <div key={cat.id}>
              <div className='cat-card' onClick={handleShow}>
                <img className='cat-img' src={GetCatFilepath(cat) + '0.png'}/>
                <div className='cat-text'>
                  <h3>{cat.name} collar {cat.sex == 'male' ? 'boy' : 'girl'}. {cat.date}</h3>
                </div>
              </div>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton/>
                <Modal.Body>
                  <CatProfile cat={cat}/>
                </Modal.Body>
              </Modal>
            </div>
        )
      })}
    </Carousel>
    */
  );
};

export default Kittens;