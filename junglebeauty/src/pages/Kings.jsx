import { Component, useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import CatCardCarousel from '../components/CatCardCarousel';
import CatList from '../components/CatList';
import ParentProfile from '../components/ParentProfile';
import './../App.css';

const Kings = () => {
  const location = useLocation();
  const [show, setShow] = useState(location.state ? true : false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);  
  var fatherName = 'null';

  if (location.state) {
    fatherName = location.state;
    window.history.replaceState({}, document.title);
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