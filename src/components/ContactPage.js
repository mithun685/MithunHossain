// ContactPage.js
import React from 'react';
import './ContactPage.css';

function ContactPage() {
    return (
        <div className="contact-container">
            <h1>Contact Me</h1>
            <form>
                <label>Name:</label>
                <input type="text" />

                <label>Email:</label>
                <input type="email" />

                <label>Message:</label>
                <textarea></textarea>

                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default ContactPage;
