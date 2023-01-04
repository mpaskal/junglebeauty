import React from 'react';
import { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { QueryCats } from '../components/DBFunctions';
import CatCardCarousel from '../components/CatCardCarousel';
import ParentProfile from '../components/ParentProfile';
import './../App.css';

const Kings = () => {
  const location = useLocation();
  const [cats, setCats] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  var parentName = 'null';

  const getCats = async () => {
    const cats = await QueryCats('parents', ['sex', '==', 'male']);
    setCats(cats);
    
    if (location.state) {
      setShow(true)
    }
  }

  useEffect(() => {
    getCats();

    return () => {};
  }, [])

  if (location.state) {
    parentName = location.state;
    window.history.replaceState({}, document.title);
  }

  return (
    <>
      <div className='page-background'>
        <h2>Kings of JungleBeauty, TICA and CCA registered!</h2>
      </div>
      <CatCardCarousel cats={cats}/>

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton/>
        <Modal.Body>
          {cats ? <ParentProfile cat={cats.find(cat => cat.name == parentName)}/> : ''}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Kings;