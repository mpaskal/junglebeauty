import { Component, useState } from 'react';
import { Modal } from 'react-bootstrap';
import CatCardCarousel from '../CatCardCarousel';
import CatProfile from './CatProfile';
import CatCard from '../CatCard';
import CatList from '../CatList';
import ParentProfile from '../ParentProfile';
import './../../App.css';

const Queens = ( {cat} ) => {

  /*
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);  
  */
  
  return (
      <>
        <div className='page-background'>
          <h2>Queens of JungleBeauty, TICA and CCA registered!</h2>
        </div>
        <CatCardCarousel cats={CatList.filter(cat => cat.type == 'queen')}/>

        {/*<Modal show={show} onHide={handleClose} size='lg'>
            <Modal.Header closeButton/>
            <Modal.Body>
                <ParentProfile cat={CatList.find(parent => parent.name == cat.name)}/>
            </Modal.Body>
  </Modal>*/}
      </>
    );
  };

export default Queens;