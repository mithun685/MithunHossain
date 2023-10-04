import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./LandingPage.css";


function Navigation({ items }) {
  return (
    <div className="navigation-row">
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.link} title={item.label}>
              {item.label}  {/* Removed the FontAwesomeIcon */}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default Navigation;
