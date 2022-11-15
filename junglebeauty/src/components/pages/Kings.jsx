import { Component, useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import CatCardCarousel from '../CatCardCarousel';
import CatProfile from './CatProfile';
import CatCard from '../CatCard';
import CatList from '../CatList';
import ParentProfile from '../ParentProfile';
import './../../App.css';

const Kings = () => {
  const location = useLocation();
  const [show, setShow] = useState(location.state ? true : false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);  
  var fatherName = 'null';

  if (location.state) {
    fatherName = location.state;
  }
  
    return (
      <>
        <div className='page-background'>
          <h2>Kings of JungleBeauty, TICA and CCA registered!</h2>
        </div>
        <CatCardCarousel cats={CatList.filter(cat => cat.type == 'king')}/>

        <Modal show={show} onHide={handleClose} size='lg'>
          <Modal.Header closeButton/>
          <Modal.Body>
              <ParentProfile cat={CatList.find(cat => cat.name == fatherName)}/>
          </Modal.Body>
        </Modal>
      </>
    );
  };

export default Kings;