import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reserveRocket } from '../../redux/rockets/rockets';

export default function RocketCard() {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  const textArray = rockets.map((rocket) => {
    if (rocket.reserved) {
      return 'Cancel Reservation';
    }
    return 'Reserve Rocket';
  });
  const classArray = rockets.map((rocket) => {
    if (rocket.reserved) {
      return 'rocket-cancel';
    }
    return 'rocket-reserve';
  });

  const handleReserve = (i) => {
    const action = reserveRocket(i)();
    dispatch(action);
  };

  return (
    rockets.map((rocket, i) => (
      <div className="rocket-card" key={rocket.id}>
        <img className="rocket-image" src={rocket.image} alt="rocket" />
        <div className="rocket-info">
          <h2 className="rocket-name">{rocket.name}</h2>
          <div className="rocket-description">{rocket.description}</div>
          <button onClick={() => { handleReserve(i); }} className={classArray[i]} type="button">{textArray[i]}</button>
        </div>
      </div>
    ))
  );
}
