import React from 'react';
import './HomePage.css';
import img from "../assets/profile.png"

function HomePage() {
    return (
        <div className="home-container">

            <h1>Md. Mithun Hossain</h1> {/* Assuming you want your name as the title. Replace with your actual name if different. */}

            <h2>Objectives</h2>
            <p>
                I am an aspiring Data Scientist with a B.Sc. in Computer Science. Passionate
                about data analysis, statistics, and storytelling. Possesses analytical, problem-solving,
                critical, and creative thinking skills.
            </p>

            <h2>Skills</h2>
            <ul>
                <li><strong>Programming:</strong> Python, SQL</li>
                <li><strong>MS Office</strong></li>
                <li><strong>Statistical Analysis</strong></li>
                <li><strong>Data Processing & Visualization</strong></li>
                <li><strong>Data Analysis</strong></li>
                <li><strong>Data Visualization Tools:</strong> Tableau, Microsoft Power BI</li>
                <li><strong>Machine Learning Algorithms:</strong> Random Forest, Decision Tree, SVM, CNN, RNN, Encoder- Decoder, Attention Mechanism.</li>
                <li><strong>Model Fine-tuning and Training</strong></li>
                <li><strong>Hyperparameter Tuning</strong></li>
                <li><strong>Research & Implement State-of-the-Art Models</strong></li>
                <li><strong>Deep Learning Frameworks:</strong> Tensorflow, Keras</li>
            </ul>
        </div>
    );
}

export default HomePage;
