import { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { getImage } from './FirebaseFunctions';

const CatImage = ({ filepath, card = false, placeholder = false }) => {
    const [image, setImage] = useState();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const downloadImage = async () => {
      var image;
      try {
        image = await getImage(filepath);
      } catch {
        image = await getImage('logo.png');
      }
      setImage(image);
    }
  
    useEffect(() => {
      downloadImage();
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