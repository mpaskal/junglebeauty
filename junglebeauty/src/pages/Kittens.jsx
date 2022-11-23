import { Component, useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import CatCardCarousel from '../components/CatCardCarousel';
import CatList from '../lists/CatList';
import KittenProfile from '../components/KittenProfile';
import './../App.css';

const Kittens = () => {
  const location = useLocation();
  const [show, setShow] = useState(location.state ? true : false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);  
  var kittenID = 'null';

  if (location.state) {
    kittenID = location.state;
    window.history.replaceState({}, document.title);
  }
  
  return (
    <>
      <div className='page-background'>
        <h2>JungleBeauty's kittens available for reservation</h2>
      </div>
      <CatCardCarousel cats={CatList.filter(cat => cat.status == 'available').sort((a, b) => a.date > b.date ? -1 : 1)}/>

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton/>
        <Modal.Body>
            <KittenProfile cat={CatList.find(cat => cat.id == kittenID)}/>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Kittens;