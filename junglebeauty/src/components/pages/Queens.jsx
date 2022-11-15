import { Component, useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import CatCardCarousel from '../CatCardCarousel';
import CatProfile from './CatProfile';
import CatCard from '../CatCard';
import CatList from '../CatList';
import ParentProfile from '../ParentProfile';
import './../../App.css';

const Queens = () => {
  const location = useLocation();
  const [show, setShow] = useState(location.state ? true : false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);  
  var motherName = 'null';

  if (location.state) {
    motherName = location.state;
    window.history.replaceState({}, document.title);
  }
  
  return (
      <>
        <div className='page-background'>
          <h2>Queens of JungleBeauty, TICA and CCA registered!</h2>
        </div>
        <CatCardCarousel cats={CatList.filter(cat => cat.type == 'queen')}/>
        
        <Modal show={show} onHide={handleClose} size='lg'>
          <Modal.Header closeButton/>
          <Modal.Body>
              <ParentProfile cat={CatList.find(cat => cat.name == motherName)}/>
          </Modal.Body>
        </Modal>
      </>
    );
  };

export default Queens;