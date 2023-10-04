// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navabr.css';

function Navbar() {
    return (
        <div>
            <h1>Md. Mithun Hossain</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/resume">Resume</Link></li>
            </ul>
        </div>
    );
}

export default Navbar;


