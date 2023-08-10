import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { send } from 'emailjs-com';
import './../App.css';

const EmailForm = () => {
    const [email, setEmail] = useState({to_email: 'junglebeautymailer@gmail.com', from_email: '', from_name: '', message: ''});

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
        .then(() => {
            alert(`Thank you for reaching out! We will get back to you as soon as possible.`);
        })
        .catch((err) => {
            alert(`We're sorry, this email could not be sent.`);
        });
    };

    return (
        <div className='form-container'>
            <form onSubmit={handleSend}>  
                <div>
                    <label className='form-label'>
                        Name:
                        <br />
                        <input className='form-input' name='from_name' type='text' defaultValue={''} required onChange={handleChange} />
                    </label>
                    <br />
                    <label className='form-label'>
                        Email address:
                        <br />
                        <input className='form-input' name='from_email' type='email' defaultValue={''} required onChange={handleChange} />
                    </label>
                    <br />
                    <label className='form-label'>
                        Message:
                        <br />
                        <textarea className='form-input' name='message' defaultValue={''} onChange={handleChange} />
                    </label>
                </div>
                <div className='buttons-container'>
                    <Button type='submit' className='form-button'>Send</Button>
                </div>
            </form>
        </div>
    );
};

export default EmailForm;