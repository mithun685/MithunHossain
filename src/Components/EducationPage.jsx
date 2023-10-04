import React from 'react';
import './Education.css';

function Education() {
    return (
        <div className="education-section">
            <h2>EDUCATION</h2>

            <div className="university-details">
                <h3>Bangladesh University of Business and Technology</h3>
                <p><strong>Degree:</strong> B.Sc Engg. in CSE ; CGPA: 2.94</p>
                <p><strong>Location:</strong> Dhaka, Bangladesh</p>
                <p><strong>Duration:</strong> Jun 2019 - Sept 2023</p>

                <h4>Courses:</h4>
                <ul>
                    <li>Machine Learning</li>
                    <li>Pattern Recognition</li>
                    <li>Distributed Database Management Systems</li>
                    <li>Accounting Fundamentals</li>
                    <li>Analysis Of Algorithms</li>
                    <li>Artificial Intelligence</li>
                    <li>Neural Network and Fuzzy Systems</li>
                    <li>Operating Systems</li>
                    <li>Data Structures</li>
                </ul>

                <h4>Capstone Project: Topic Modeling Using Deep Reinforcement Learning</h4>
                <p>Developed a topic modeling algorithm using deep reinforcement learning to extract topic. Utilized TensorFlow to design and train the deep learning model. Presented findings to faculty and peers, showcasing the potential of reinforcement learning in advanced text analytics.</p>
            </div>
        </div>
    );
}

export default Education;
