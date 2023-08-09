import { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { GetImage } from './FirebaseFunctions';

const CatImage = ({ filepath, card = false, placeholder = false }) => {
    const [image, setImage] = useState();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getImage = async () => {
      var image;
      try {
        image = await GetImage(filepath);
      } catch {
        image = await GetImage('logo.png');
      }
      setImage(image);
    }
  
    useEffect(() => {
      getImage();
    }, [])

    return (
      <>
        <img className={`cat-img ${card && 'card-img'} ${placeholder && 'placeholder-img'}`} src={image} alt={filepath} onClick={card ? undefined : handleShow} />

        <Modal show={show} onHide={handleClose} size='xl'>
            <Modal.Header closeButton/>
            <Modal.Body>
              <img className='cat-img modal-img' src={image} />
            </Modal.Body>
        </Modal>
      </>
    );
}

export default CatImage;