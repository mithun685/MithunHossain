// ProjectsPage.js
import React from 'react';
import './ProjectsPage.css';

function ProjectsPage() {
    // Sample projects data; in a real app, this might come from an API or CMS
    const projects = [
        { id: 1, title: 'Deep Learning Framework', description: 'A deep learning framework built using Python and TensorFlow.' },
        { id: 2, title: 'Sentiment Analysis Tool', description: 'A tool to analyze sentiment of user reviews using NLP techniques.' },
        // Add more projects as needed
    ];

    return (
        <div className="projects-container">
            <h1>My Projects</h1>
            <ul className="project-list">
                {projects.map(project => (
                    <li key={project.id}>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProjectsPage;
