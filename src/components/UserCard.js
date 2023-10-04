// UserCard.js
import React from 'react';
import './UserCard.css';

function UserCard({ user }) {
    return (
        <div className="user-card">
            <div className="image-container">
                <img src={user.profileImage} alt="Profile" className="profile-pic" />
            </div>
            <div className="details-container">
                <h1>{user.name}</h1>
                <p>{user.bio}</p>
                <h2>Skills</h2>
                <ul className="skills-list">
                    {user.skills.map(skill => <li key={skill}>{skill}</li>)}
                </ul>
            </div>
        </div>
    );
}

export default UserCard;
