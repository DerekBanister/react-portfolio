import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';

function Contact() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {

        const { name, value } = e.target;


        return name === 'firstName' ? setFirstName(value) : setLastName(value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for contacting me ${firstName} ${lastName}`);
        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div>
            <h1 class="text-center">  Contact Me </h1>
            <form className="form">
                <input
                    value={firstName}
                    name="firstName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="First Name"
                />
                <input
                    value={lastName}
                    name="lastName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Last Name"
                />
                <input
                    value={email}
                    name="email"
                    type="text"
                    placeholder="E-mail"
                />
                <input
                    value={message}
                    name="message"
                    type="text"
                    placeholder="Message"
                />
                <button class="btn btn-dark" type="button " onClick={handleFormSubmit}>
                    Submit
                </button>
            </form>
        </div>
    );
}


export default Contact;