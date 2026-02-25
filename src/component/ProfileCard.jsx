import React, { useState } from "react";

function ProfileCard({ name, role, status, buttonLabel, clickMessage }) {
  const [message, setMessage] = useState(false);

  const handleClick = () => {
    setMessage(!message);
  };

  return (
    
      <div className="profile-card">
        <div className="card">
          <h4>👩‍💻 Name : {name}</h4>
          <p>🎯 Role : {role}</p>
          <p>📚 Status : {status}</p>
          <button onClick={handleClick}>{message ? "Hide Message" : buttonLabel}</button>
          {message && <h5>{clickMessage}</h5>}
        </div>
      </div>
  
  );
}

export default ProfileCard;
