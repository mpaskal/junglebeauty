import { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { QueryCats } from '../components/DBFunctions';
import CatCardCarousel from '../components/CatCardCarousel';
import KittenProfile from '../components/KittenProfile';
import './../App.css';

const Kittens = () => {
  const location = useLocation();
  const [cats, setCats] = useState([]);
  const [show, setShow] = useState(location.state ? true : false);
  const handleClose = () => setShow(false); 
  var kittenID = 'null';

  const getCats = async () => {
    const cats = await QueryCats('kittens', ['status', '==', 'available']);
    setCats(cats);
  }

  useEffect(() => {
    getCats();

    return () => {};
  }, [])

  if (location.state) {
    kittenID = location.state;
    window.history.replaceState({}, document.title);
  }
  
  return (
    <>
      <div className='page-background'>
        <h2>JungleBeauty's kittens available for reservation</h2>
      </div>

      <CatCardCarousel cats={cats.sort((a, b) => a.date > b.date ? -1 : 1)}/>

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton/>
        <Modal.Body>
            <KittenProfile cat={cats.find(cat => cat.id == kittenID)}/>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Kittens;