import React from 'react';
import { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useCats } from '../contexts/CatsContext';
import CatCardCarousel from '../components/CatCardCarousel';
import ParentProfile from '../components/ParentProfile';
import './../App.css';

const ParentPage = ({ sex }) => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  var parentName = 'null';
  var cat = null;
  var cats = useCats();

  if (cats) {
    cats = cats.parents.filter((cat) => cat.sex === sex && cat.show !== 'false');
  } else {
    cats = [];
  }

  if (location.state) {
    parentName = location.state;
    window.history.replaceState({}, document.title);
    cat = cats.find(cat => cat.name === parentName);
  }

  useEffect(() => {
    if (cat) {
      setShow(true);
    }
  }, [])

  return (
    <>
      <div className='page-background'>
        <h1 className='page-subheader'>{sex === 'male' ? 'Kings' : 'Queens'} of JungleBeauty, TICA and CCA registered!</h1>
      </div>

      <CatCardCarousel cats={cats.sort((a, b) => a.date > b.date ? 1 : -1)}/>

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header className='profile-header' closeButton>
          <Modal.Title className='profile-title'>
              <h2>{cat && cat.name}</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cats && <ParentProfile cat={cat}/>}
        </Modal.Body>
      </Modal>
    </>
  );
};

//cats={cats.sort((a, b) => a.status > b.status ? -1 : 1)

export default ParentPage;