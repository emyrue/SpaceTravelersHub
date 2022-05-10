import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import MissionData from './MissionData';

const Missions = () => {
  const missions = useSelector((state) => state.missions);

  return (
    <div>
      <h1>Missions</h1>

      <Table striped bordered>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>&nbsp;</th>
          </tr>
        </thead>

        <tbody>
          {missions.map((mission) => (
            <MissionData key={mission.id} mission={mission} />
          ))}
        </tbody>

      </Table>
    </div>
  );
};

export default Missions;
