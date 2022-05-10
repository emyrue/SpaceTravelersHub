import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reserveRocket } from '../../redux/rockets/rockets';

export default function RocketCard() {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  const handleReserve = (id) => {
    const action = reserveRocket(id)();
    dispatch(action);
  };

  return (
    rockets.map((rocket) => (
      <div className="rocket-card" key={rocket.id}>
        <img className="rocket-image" src={rocket.image} alt="rocket" />
        <div className="rocket-info">
          <h2 className="rocket-name">{rocket.name}</h2>
          <div className="rocket-description">
            {rocket.reserved && (<span className="rocket-badge">Reserved</span>)}
            {rocket.description}
          </div>
          {rocket.reserved && (
            <button onClick={() => { handleReserve(rocket.id); }} className="rocket-cancel" type="button">Cancel Reservation</button>
          )}
          {!rocket.reserved && (
            <button onClick={() => { handleReserve(rocket.id); }} className="rocket-reserve" type="button">Reserve Rocket</button>
          )}
        </div>
      </div>
    ))
  );
}
