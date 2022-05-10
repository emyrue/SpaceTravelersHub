import React from 'react';
import { useDispatch } from 'react-redux';
import { saveRockets } from '../../redux/rockets/rockets';
import RocketCard from './RocketCard';
import '../../styles/rocket.css';

const rocketURL = 'https://api.spacexdata.com/v3/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    const getRockets = async () => {
      const myRockets = await (await fetch(rocketURL)).json();
      const getRockets = saveRockets(myRockets)();
      dispatch(getRockets);
    };
    getRockets();
  }, []);
  return (
    <RocketCard />
  );
};

export default Rockets;
