import React, { useState } from "react";
import "./LandingPage.css";
import img from "../assets/profile.png";
import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectsPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navigationItems, socialData } from "./portfolioData";
import Education from "./EducationPage";



function LandingPage() {
  const [activePage, setActivePage] = useState("home");

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  const renderContent = () => {
    switch (activePage) {
      case "about": return <AboutPage />;
      case "projects": return <ProjectsPage />;
      case "education": return <Education />;
      default:
        return (
          <>
            <h1>Md. Mithun Hossain</h1>
            <h4>Python | Machine Learning Enthusiast</h4>
          </>
        );
    }
  };

  return (
    <div className="landing-container">
      <div className="left-column">
        <img src={img} alt="Mithun Hossain" className="profile-pic" />
        <h1>Md. Mithun Hossain</h1>
        <h4>Python | Machine Learning Enthusiast</h4>

        <div className="navigation-row">
          <ul>
            {navigationItems.map((item) => (
              <li key={item.label}>
                <a onClick={() => handlePageChange(item.link.slice(1))}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="social-icons">
          {socialData.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              title={link.platform} // added a title for accessibility
            >
              <FontAwesomeIcon icon={link.icon} /> {link.platform}
            </a>
          ))}
        </div>
      </div>

      <div className="right-column">{renderContent()}</div>
    </div>
  );
}

export default LandingPage;
