import React from 'react';

function ProfileInfo({ img, name, role }) {
  return (
    <div>
      <img src={img} alt={name} className="profile-pic" />
      <h1>{name}</h1>
      <h2>{role}</h2>
    </div>
  );
}

export default ProfileInfo;
