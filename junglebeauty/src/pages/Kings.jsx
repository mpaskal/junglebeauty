import React from 'react';
import { Component, useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { QueryCats, InsertCat } from '../components/DBFunctions';
import CatCardCarousel from '../components/CatCardCarousel';
import CatList from '../lists/CatList';
import ParentProfile from '../components/ParentProfile';
import './../App.css';

const Kings = () => {
  const location = useLocation();
  const [cats, setCats] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);  
  var fatherName = 'null';

  const getCats = async () => {
    const cats = await QueryCats('parents', ['sex', '==', 'male']);
    setCats(cats);
  }

  useEffect(() => {
    getCats();

    return () => {};
  }, [])
  
  console.log(cats);

  if (location.state) {
    fatherName = location.state;
    window.history.replaceState({}, document.title);
  }

  //CatList.filter(cat => cat.type == 'kitten').map((cat) => InsertCat('kittens', cat));
  
  return (
    <>
      <div className='page-background'>
        <h2>Kings of JungleBeauty, TICA and CCA registered!</h2>
      </div>
      <CatCardCarousel cats={cats}/>

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton/>
        <Modal.Body>
          <ParentProfile cat={cats.find(cat => cat.name == fatherName)}/>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Kings;