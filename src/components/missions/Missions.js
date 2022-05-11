import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import MissionData from './MissionData';

const Missions = () => {
  const missions = useSelector((state) => state.missions);

  return (
    <Container>
      <div className="py-5">
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
    </Container>
  );
};

export default Missions;
