import React from 'react';
import emailjs from 'emailjs-com';
import TextField from '@material-ui/core/TextField'

const ContactForm = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_hn00z4r', 'template_6i3uehq', e.target, 'Y-suacMAhtF9kIGNA')
    }

    return (
        <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <TextField
                required
                name="from_email"
                label="Email куда отправлять"
                variant="outlined"
                type="email"
                style={{ width: '27.5vh', marginBottom: '5px' }} 
            />
            <div className="button-wrapper" style={{ textAlign: 'center', margin: '1px 0' }}>
                <button 
                    className="outline-hover-button" 
                    type="submit" 
                    style={{ padding: '10px 20px', fontSize: '16px' }}>
                    Send
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
