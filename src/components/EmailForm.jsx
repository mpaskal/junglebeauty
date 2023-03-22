import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { InsertCat, UpdateCat, UpdateChildren, DeleteCat } from './FirebaseFunctions';
import ImageCarousel from './ImageCarousel';
import './../App.css';

const EmailForm = () => {
    const [email, setEmail] = useState([]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEmail({ ...email, [name]: value });
    }

    const handleSend = async () => {

    }

    return (
        <div className='form-container'>
            <form>  
                <div>
                    <label className='form-label'>
                        Name:
                        <br />
                        <input name='name' type='text' defaultValue={''} onChange={handleChange} />
                    </label>
                    <br />
                    <label className='form-label'>
                        Email address:
                        <br />
                        <input name='emailAddress' type='email' defaultValue={''} onChange={handleChange} />
                    </label>
                    <br />
                    <label className='form-label'>
                        Subject:
                        <br />
                        <input name='subject' defaultValue={''} onChange={handleChange} />
                    </label>
                </div>
            </form>

            <div className='buttons-container'>
                <button type='button' onClick={handleSend}>Send</button>
            </div>
        </div>
    );
};

export default EmailForm;