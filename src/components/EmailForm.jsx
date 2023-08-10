import { useState } from 'react';
import { Modal, Button, Alert } from 'react-bootstrap';
import { Swal } from 'sweetalert2';
import { send } from 'emailjs-com';
import './../App.css';

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_USER_ID;

const EmailForm = () => {
    const [email, setEmail] = useState({to_email: 'junglebeautymailer@gmail.com', from_email: '', from_name: '', message: ''});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEmail({ ...email, [name]: value });
        console.log(process.env.REACT_APP_SERVICE_ID)
    }

    const handleSend = (e) => {
        e.preventDefault();
        send(
            SERVICE_ID,
            TEMPLATE_ID,
            email,
            USER_ID
            )
        .then(() => {
            // Swal.fire({
            //     icon: 'success',
            //     title: 'Thank you for reaching out! We will get back to you as soon as possible.',
            //     color: '#FAFAFA',
            //     confirmButtonColor: '#046E1B'
            // })
            alert('success')
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
                        <input className='form-input' name='from_name' type='text' placeholder='Name...' required onChange={handleChange} />
                    </label>
                    <br />
                    <label className='form-label'>
                        Email address:
                        <br />
                        <input className='form-input' name='from_email' type='email' placeholder='Email...' required onChange={handleChange} />
                    </label>
                    <br />
                    <label className='form-label'>
                        Message:
                        <br />
                        <textarea className='form-input' name='message' placeholder='Message...' onChange={handleChange} />
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