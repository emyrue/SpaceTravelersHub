import React from 'react';
import ReservedRockets from './ReservedRockets';
import ReservedMissions from './ReservedMissions';
import '../../styles/reservedRockets.css';

const Profile = () => (
  <section className="profile">
    <div className="tables">
      <h2 className="my-blank">My Missions</h2>
      <ReservedMissions />
    </div>
    <div className="tables">
      <h2 className="my-blank">My Rockets</h2>
      <ReservedRockets />
    </div>
  </section>
);

export default Profile;
