import React from 'react';

const rocketURL = 'https://api.spacexdata.com/v3/rockets';

const Rockets = () => {
  const [rockets, changeRockets] = React.useState();
  React.useEffect(() => {
    const getRockets = async () => {
      const myRockets = await (await fetch(rocketURL)).json();
      console.log(myRockets);
      changeRockets(myRockets[1].description);
    };
    getRockets();
  }, []);
  return (
    <h1>{rockets}</h1>
  );
};

export default Rockets;
