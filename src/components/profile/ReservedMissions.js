import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { leaveMission } from '../../redux/missions/missions';

const ReservedMissions = () => {
  const missions = useSelector((state) => state.missions);
  const activeMissions = missions.filter((mission) => mission.reserved);

  const dispatch = useDispatch();
  const leaveBtn = (id) => {
    dispatch(leaveMission(id));
  };

  return (
    <div>
      <Table striped bordered>
        <tbody>
          {activeMissions.length > 0
            ? activeMissions.map((mission) => (
              <tr key={mission.id}>
                <td className="d-flex justify-content-between">
                  {mission.name}
                  <Button
                    onClick={() => leaveBtn(mission.id)}
                    variant="outline-danger"
                    size="sm"
                  >
                    Leave Mission
                  </Button>
                </td>
              </tr>
            ))
            : (
              <tr>
                <td>Your active missions will appear here</td>
              </tr>
            )}
        </tbody>
      </Table>

    </div>
  );
};

export default ReservedMissions;
