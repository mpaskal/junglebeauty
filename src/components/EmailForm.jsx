import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { send } from 'emailjs-com';
import './../App.css';

const EmailForm = () => {
    const [email, setEmail] = useState([]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEmail({ ...email, [name]: value });
    }

    const handleSend = (e) => {
        e.preventDefault();
        send(
            'service_b7v6hjo',
            'template_iq9hi46',
            email,
            '7PX90rf6YM9qXhPH7'
            )
        .then((response) => {
            console.log('Email sent', response.status, response.text);
            alert('Email sent!');
        })
        .catch((err) => {
            console.log('Sending failed', err);
        });
    };

    return (
        <div className='form-container'>
            <form onSubmit={handleSend}>  
                <div>
                    <label className='form-label'>
                        Name:
                        <br />
                        <input name='user_name' type='text' defaultValue={''} required onChange={handleChange} />
                    </label>
                    <br />
                    <label className='form-label'>
                        Email address:
                        <br />
                        <input name='user_email' type='email' defaultValue={''} required onChange={handleChange} />
                    </label>
                    <br />
                    <label className='form-label'>
                        Subject:
                        <br />
                        <input name='subject' defaultValue={''} required onChange={handleChange} />
                    </label>
                    <br />
                    <label className='form-label'>
                        Message:
                        <br />
                        <textarea name='message' defaultValue={''} onChange={handleChange} />
                    </label>
                </div>
                <div className='buttons-container'>
                    <Button type='submit'>Send</Button>
                </div>
            </form>
        </div>
    );
};

export default EmailForm;