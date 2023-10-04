import React, { useState } from 'react';
import "./projects.css";
import axios from 'axios';

function CyberbullyingDetector() {
    const [text, setText] = useState('');
    const [prediction, setPrediction] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // Reset any previous error
    
        try {
            const response = await axios.post('http://localhost:5000/detect_cyberbullying', { text });
    
            // Debug: Print the response to console
            console.log('Server Response:', response.data);
    
            if (response.status !== 200) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            if (response.data.predicted_class) {
                setPrediction(response.data.predicted_class);
            } else if (response.data.error) {
                // If the server sends back an error message
                throw new Error(response.data.error);
            } else {
                throw new Error('Unknown server response.');
            }
    
        } catch (err) {
            console.error("Error:", err);
            setError(err.message || "An error occurred while fetching data.");
        }
    };
    
    
    return (
        <div className="CyberbullyingDetector">
            <h1>Cyberbullying Detector</h1>
            <form onSubmit={handleSubmit}>
                <textarea 
                    value={text}
                    onChange={e => setText(e.target.value)}
                    placeholder="Enter text here..."
                />
                <button type="submit">Detect</button>
            </form>
            {prediction && <p>Prediction: {prediction}</p>}
            {error && <p style={{color: "red"}}>Error: {error}</p>}
        </div>
    );
}

export default CyberbullyingDetector;