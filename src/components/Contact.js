import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';

const styles = {
    color: "black",
}

function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                return setName(value);

            case 'email':
                return setEmail(value);

            default:
                return setMessage(value);
        }



    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for contacting me ${name}`);
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div>
            <h1 class="text-center">  Contact Me </h1>
            <form className="form">
                <input style={styles}
                    value={name}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Name"
                />
                <input style={styles}
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="E-mail"
                />
                <input style={styles}
                    value={message}
                    name="message"
                    onChange={handleInputChange}
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