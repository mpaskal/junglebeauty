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
  //const [cats, setCats] = useState([]);
  const [show, setShow] = useState(location.state ? true : false);
  //const getCats = () => setCats(QueryCats('kings'));
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);  
  var fatherName = 'null';
  const cats = QueryCats('kings');

/*
  useEffect(() => {
    const loadCats = async () => {
      try {
        const cats = await QueryCats('kings');
        setCats(cats);
      } catch(error) {
      console.error();
     }
    };

    loadCats();
  }, [])
  */

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