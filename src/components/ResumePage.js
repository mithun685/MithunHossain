// ResumePage.js
import React from 'react';
import './ResumePage.css';

function ResumePage() {
    return (
        <div className="resume-container">
            <h1>My Resume</h1>
            <p>Below is a brief overview of my resume. For more details, download the full version.</p>
            
            // Sample resume content
            <h2>Education</h2>
            <p>Master's in Computer Science, XYZ University</p>

            <h2>Experience</h2>
            <p>Machine Learning Engineer, ABC Corp</p>
            
            <a href="/path_to_your_resume.pdf" download>Download Full Resume</a>
        </div>
    );
}

export default ResumePage;
