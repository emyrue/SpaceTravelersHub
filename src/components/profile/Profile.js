import React from 'react';
import ReservedRockets from './ReservedRockets';
import '../../styles/reservedRockets.css';

const Profile = () => (
  <section className="profile">
    <div className="tables">
      <h2 className="my-blank">My Missions</h2>
    </div>
    <div className="tables">
      <h2 className="my-blank">My Rockets</h2>
      <ul className="rocket-container">
        <ReservedRockets />
      </ul>
    </div>
  </section>
);

export default Profile;
