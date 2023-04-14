import { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';
import { useCats } from '../contexts/CatsContext';
import CatCard from './CatCard';
import CatCardCarousel from './CatCardCarousel';
import KittenProfile from './KittenProfile';
import './../App.css';

const KittenGallery = () => {
  const location = useLocation();
  const [show, setShow] = useState(location.state ? true : false);
  const handleClose = () => setShow(false); 
  var kittenID = 'null';
  var cats = useCats();
  
  if (cats) {
      cats = cats.kittens.filter((cat) => cat.status == 'available');
  } else {
      cats = [];
  }

  if (location.state) {
    kittenID = location.state;
    window.history.replaceState({}, document.title);
  }
  
  return (
    <>
      <Accordion className='accordion'>
        <Accordion.Item className='accordion-item'>
            <Accordion.Header className='accordion-header'>
              <p className='accordion-header-text'>
                Filter kittens
              </p>
            </Accordion.Header>
            <Accordion.Body>
              
            </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <div className='gallery-container'>
        {cats.map((cat) => {
          return (
            <CatCard key={cat.id} cat={cat} />
          );
        })}
      </div>

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton/>
        <Modal.Body>
            <KittenProfile cat={cats.find(cat => cat.id == kittenID)}/>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default KittenGallery;