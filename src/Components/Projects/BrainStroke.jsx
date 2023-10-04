import React, { useState } from 'react';
import "./projects.css";


function BrainStroke() {
    const [formData, setFormData] = useState({
        gender: 'Male',
        age: '',
        hypertension: 'No',
        heart_disease: 'No',
        ever_married: 'No',
        work_type: 'Private',
        Residence_type: 'Urban',
        avg_glucose_level: '',
        bmi: '',
        smoking_status: 'never smoked',
        // ... add other fields as required
    });
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const predictResponse = await fetch('http://localhost:5000/predict_brainstroke', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
    
            if (predictResponse.ok) {
                const data = await predictResponse.json();
                
                // Adjusting the prediction message based on the model's response
                const prediction = data.prediction;
                if (prediction === 1 || prediction === "1") {
                    setMessage("This person has a high probability of experiencing a brain stroke.");
                } else {
                    setMessage("This person has a low probability of experiencing a brain stroke.");
                }
    
            } else {
                console.error("Error fetching prediction:", await predictResponse.text());
            }
    
        } catch (error) {
            console.error("Error in handleSubmit:", error.message);
        }
    };
    
    

    return (
        <div className="BrainStroke">
            <h1>Brain Stroke Predictor</h1>
            <form onSubmit={handleSubmit}>
                {Object.entries(formData).map(([key, value]) => (
                    <div key={key}>
                        <label>{key}: </label>
                        {key === "gender" || key === "ever_married" || key === "work_type" || key === "Residence_type" || key === "smoking_status" ? (
                            <select
                                name={key}
                                value={value}
                                onChange={e => setFormData({ ...formData, [e.target.name]: e.target.value })}
                            >
                                {key === "gender" && ['Male', 'Female', 'Other'].map(val => <option key={val} value={val}>{val}</option>)}
                                {key === "ever_married" && ['Yes', 'No'].map(val => <option key={val} value={val}>{val}</option>)}
                                {key === "work_type" && ['Private', 'Self-employed', 'Govt_job', 'children', 'Never_worked'].map(val => <option key={val} value={val}>{val}</option>)}
                                {key === "Residence_type" && ['Urban', 'Rural'].map(val => <option key={val} value={val}>{val}</option>)}
                                {key === "smoking_status" && ['formerly smoked', 'never smoked', 'smokes', 'Unknown'].map(val => <option key={val} value={val}>{val}</option>)}
                            </select>
                        ) : (
                            <input 
                                type="text"
                                name={key}
                                value={value}
                                onChange={e => setFormData({ ...formData, [e.target.name]: e.target.value })}
                            />
                        )}
                    </div>
                ))}
                <button type="submit">Predict</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default BrainStroke;

