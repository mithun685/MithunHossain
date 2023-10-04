import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SocialLinks({ links }) {
  return (
    <div className="social-icons">
      {links.map((link, index) => (
        <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={link.icon} />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;
