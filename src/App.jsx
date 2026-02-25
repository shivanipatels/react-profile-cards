import React from "react";
import ProfileCard from "./component/ProfileCard";
import "./App.css";

function App() {
  return (
    <div className="profile-card">
      <ProfileCard
        name="Shivani"
        role="B.Tech CS Student"
        status="Learning React"
        buttonLabel="Show Progress"
        clickMessage="Day by day improving in React"
      />
      <ProfileCard
        name=" MERN Learner"
        role="React Beginner"
        status="Building Projects"
        buttonLabel="Show Skills"
        clickMessage="Currently learning MERN Stack "
      />
      <ProfileCard
        name="Future Developer"
        role="Aspiring Software Engineer"
        status="Consistent Learner"
        buttonLabel="Show Goal"
        clickMessage="My goal is to become a MERN Developer"
      />
    </div>
  );
}

export default App;
