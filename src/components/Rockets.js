import React from 'react';

const rocketURL = 'https://api.spacexdata.com/v3/rockets';

const Rockets = () => {
  const [rockets, changeRockets] = React.useState();
  React.useEffect(() => {
    const getRockets = async () => {
      const myRockets = await (await fetch(rocketURL)).json();
      changeRockets(myRockets[0].rocket_name);
      console.log(myRockets);
    };
    getRockets();
  }, []);
  return (
    <h1>{rockets}</h1>
  );
};

export default Rockets;
