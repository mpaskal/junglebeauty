import React from 'react';
import { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { QueryCats } from './FirebaseFunctions';
import CatCardCarousel from '../components/CatCardCarousel';
import ParentProfile from '../components/ParentProfile';
import './../App.css';

const ParentPage = ({ sex }) => {
  const location = useLocation();
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  var parentName = 'null';

  const getCats = async () => {
    try {
      const cats = await QueryCats('parents', ['sex', '==', (sex == 'male' ? 'male' : 'female')]);
      setCats(cats);

      if (location.state) {
        setShow(true)
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCats();
  }, [])

  if (location.state) {
    parentName = location.state;
    window.history.replaceState({}, document.title);
  }

  return (
    <>
      <div className='page-background'>
        <h2>{sex == 'male' ? 'Kings' : 'Queens'} of JungleBeauty, TICA and CCA registered!</h2>
      </div>

      {/* PLACEHOLDER LOADING TEXT */}
      {loading == true ? <>Loading</> : ''}

      <CatCardCarousel cats={cats.sort((a, b) => a.status > b.status ? -1 : 1)}/>

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton/>
        <Modal.Body>
          {cats ? <ParentProfile cat={cats.find(cat => cat.name == parentName)}/> : ''}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ParentPage;