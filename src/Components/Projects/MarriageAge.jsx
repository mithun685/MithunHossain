import React, { useState } from 'react';
import "./projects.css";



function MarriageAgePredictor() {
    const [formData, setFormData] = useState({
        gender: '',
        religion: '',
        caste: '',
        mother_tongue: '',
        country: '',
        height_cms: ''
    });
    const [prediction, setPrediction] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          // Fetching the prediction first
          const predictResponse = await fetch('http://localhost:5000/predict', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
          });
  
          if (predictResponse.ok) {
              const data = await predictResponse.text();
              setPrediction(data);
          } else {
              console.error("Error fetching prediction:", await predictResponse.text());
              throw new Error('Failed to get prediction.');
          }
  
          // Now, sending data to Google Sheets
          const addDataResponse = await fetch('http://localhost:5000/add_data', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
          });
  
          if (!addDataResponse.ok) {
              console.error("Error adding data to Google Sheets:", await addDataResponse.text());
              throw new Error('Failed to add data to Google Sheets.');
          }
  
      } catch (error) {
          console.error("Error in handleSubmit:", error.message);
      }
  };
    return (
        <div className="App MarriageAgePredictor" >
            <h1>Marriage Age Predictor</h1>
            <form onSubmit={handleSubmit}>
                {Object.keys(formData).map(key => (
                    <div key={key}>
                        <label>{key}: </label>
                        <input 
                            type="text" 
                            name={key} 
                            value={formData[key]} 
                            onChange={e => setFormData({ ...formData, [e.target.name]: e.target.value })} 
                        />
                    </div>
                ))}
                <button type="submit">Predict</button>
            </form>
            {prediction && <p>Predicted Age: {prediction}</p>}
        </div>
    );
}

export default MarriageAgePredictor;
