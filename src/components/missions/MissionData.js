import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/missions/missions';

const MissionData = (props) => {
  const { mission } = props;
  const dispatch = useDispatch();

  const joinBtn = (id) => {
    dispatch(joinMission(id));
  };

  const leaveBtn = (id) => {
    dispatch(leaveMission(id));
  };

  return (
    <tr>
      <td className="fw-bold">{mission.name}</td>
      <td>{mission.description}</td>

      <td className="align-middle">
        {!mission.reserved && (
          <Badge bg="secondary" className="p-2">Not a member</Badge>
        )}
        {mission.reserved && (
          <Badge bg="info" className="p-2">Active Member</Badge>
        )}
      </td>

      <td className="align-middle">
        {!mission.reserved && (
          <Button
            onClick={() => { joinBtn(mission.id); }}
            variant="outline-secondary"
            className="text-nowrap"
            size="sm"
          >
            Join mission
          </Button>
        )}
        {mission.reserved && (
          <Button
            onClick={() => leaveBtn(mission.id)}
            variant="outline-danger"
            className="text-nowrap"
            size="sm"
          >
            Leave mission
          </Button>
        )}
      </td>
    </tr>
  );
};

MissionData.defaultProps = {
  mission: [],
};

MissionData.propTypes = {
  mission: PropTypes.shape(
    {
      id: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
      reserved: PropTypes.bool,
    },
  ),
};

export default MissionData;
