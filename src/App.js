import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { saveRockets } from './redux/rockets/rockets';
import Rockets from './components/rockets/Rockets';
import Missions from './components/missions/Missions';
import Profile from './components/profile/Profile';
import Nav from './components/Nav';
import { getMissions } from './redux/missions/missions';

const rocketURL = 'https://api.spacexdata.com/v3/rockets';

function App() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    const getRockets = async () => {
      const myRockets = await (await fetch(rocketURL)).json();
      const getRockets = saveRockets(myRockets)();
      dispatch(getRockets);
    };
    getRockets();
    dispatch(getMissions());
  }, []);
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
