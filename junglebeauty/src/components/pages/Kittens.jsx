import { Component, useState } from 'react';
import { Carousel, Modal, Button } from 'react-bootstrap';
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
    <div>
      <Carousel interval={null} slide={false} variant='dark'>
        {CatList.filter(cat => cat.type == 'kitten' && cat.status == 'available').map((cat) => {
          return (
              <Carousel.Item>
                <div onClick={handleShow}>
                  <img className='cat-img' src={GetCatFilepath(cat)}/>
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
              </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  );
};

export default Kittens;