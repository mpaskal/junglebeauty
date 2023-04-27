import { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';
import { useCats } from '../contexts/CatsContext';
import CatCard from './CatCard';
import KittenProfile from './KittenProfile';
import './../App.css';

const KittenGallery = () => {
  const location = useLocation();
  const [show, setShow] = useState(location.state ? true : false);
  const [filters, setFilters] = useState({});
  const handleClose = () => setShow(false); 
  var kittenID = 'null';
  var cats = useCats();
  
  if (cats) {
      cats = cats.kittens.filter((cat) => cat.status == 'available');
  } else {
      cats = [];
  }

  if (location.state) {
    kittenID = location.state;
    window.history.replaceState({}, document.title);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmail({ ...filters, [name]: value });
  }
  
  return (
    <>
      <Accordion className='filter-accordion' defaultActiveKey='1'>
        <Accordion.Item className='accordion-item' eventKey='0'>
            <Accordion.Header className='accordion-header'>
              <p className='accordion-header-text'>
                Filter kittens
              </p>
            </Accordion.Header>
            <Accordion.Body>
              <label>
                {`Available kittens: `}
                <input type="checkbox" name="status" value="available" onChange={handleChange} checked />
              </label>
              <label>
                {`Reserved kittens: `}
                <input type="checkbox" name="status" value="reserved" onChange={handleChange} />
              </label>
              <label>
                {`Graduated kittens: `}
                <input type="checkbox" name="status" value="graduated" onChange={handleChange} />
              </label>
              
              <br/>

              <label>
                {`Silver: `}
                <input type="checkbox" name="colour" value="silver" onChange={handleChange} />
              </label>
              <label>
                {`Brown: `}
                <input type="checkbox" name="colour" value="brown" onChange={handleChange} />
              </label>
            </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <div className='gallery-container'>
        {cats.map((cat) => {
          return (
            <CatCard key={cat.id} cat={cat} size='small' />
          );
        })}
      </div>

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton/>
        <Modal.Body>
            <KittenProfile cat={cats.find(cat => cat.id == kittenID)}/>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default KittenGallery;