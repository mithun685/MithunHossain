import React, { useState } from "react";
import BrainStroke from "./Projects/BrainStroke";
import MarriageAge from "./Projects/MarriageAge";
import CyberbullyingDetector from "./Projects/CyberbullyingDetector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./ProjectsPage.css";
import brain from '../assets/BrainStroke.jpg';
import marriage from '../assets/MarriageAgePrediction.jpg';
import cyberbullying from '../assets/CyberBullying.png';


function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  if (selectedProject) {
    return (
      <div>
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="back-icon"
          onClick={() => setSelectedProject(null)}
        />
        {selectedProject === "BrainStroke" && <BrainStroke />}
        {selectedProject === "MarriageAge" && <MarriageAge />}
        {selectedProject === "CyberbullyingDetector" && (
          <CyberbullyingDetector />
        )}
      </div>
    );
  }

  return (
    <div className="projects-list">
      <div
        className="project-card"
        onClick={() => setSelectedProject("BrainStroke")}
      >
        <img
          src={brain}
          alt="Brain Stroke Prediction"
          className="project-image"
        />
        <div className="project-title">Brain Stroke Prediction</div>
        <div className="project-description">
          An innovative model that leverages deep learning to predict potential
          brain stroke incidents.
        </div>
        <button className="learn-more">Learn More</button>
      </div>

      <div
        className="project-card"
        onClick={() => setSelectedProject("MarriageAge")}
      >
        <img
          src={marriage}
          alt="Marriage Age Prediction"
          className="project-image"
        />
        <div className="project-title">Marriage Age Prediction</div>
        <div className="project-description">
          A unique machine learning model predicting the ideal age for marriage
          based on socio-economic factors.
        </div>
        <button className="learn-more">Learn More</button>
      </div>

      <div
        className="project-card"
        onClick={() => setSelectedProject("CyberbullyingDetector")}
      >
        <img
          src={cyberbullying}
          alt="Cyberbullying Detection"
          className="project-image"
        />
        <div className="project-title">Cyberbullying Detection</div>
        <div className="project-description">
          An advanced model designed to detect and combat cyberbullying on
          various online platforms.
        </div>
        <button className="learn-more">Learn More</button>
      </div>
    </div>
  );
}

export default ProjectsPage;
