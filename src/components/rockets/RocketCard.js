import React from 'react';
import { useSelector } from 'react-redux';

export default function RocketCard() {
  const rockets = useSelector((state) => state.rockets);
  return (
    rockets.map((rocket) => (
      <div className="rocket-card" key={rocket.id}>
        <img className="rocket-image" src={rocket.image} alt="rocket" />
        <div className="rocket-info">
          <h2 className="rocket-name">{rocket.name}</h2>
          <div className="rocket-description">{rocket.description}</div>
          <button className="rocket-reserve" type="button">Reserve Rocket</button>
        </div>
      </div>
    ))
  );
}
