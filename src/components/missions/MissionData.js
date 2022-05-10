import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/missions/missions';

const MissionData = (props) => {
  const missions = useSelector((state) => state.missions);

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
      <td>{mission.name}</td>
      <td>{mission.description}</td>
      <td>
        {/* <button></button> */}
        <Button variant="secondary" size="sm">Not a member</Button>
      </td>
      <td>

        {!reserved && (
          <button type="button" onClick={() => joinBtn(mission.id)}>join</button>
          // <Button
          //   onClick={() => joinBtn(mission.id)}
          //   variant="outline-secondary"
          //   size="sm"
          // >
          //   Join mission
          // </Button>
        )}
        {reserved && (
          <button type="button" onClick={() => leaveBtn(mission.id)}>leave</button>
          // <Button
          //   onClick={() => leaveBtn(mission.id)}
          //   variant="outline-secondary"
          //   size="sm"
          // >
          //   Leave mission
          // </Button>
        )}
      </td>
    </tr>
  );
};

MissionData.defaultProps = {
  mission: [],
  // reserved: false,
};

MissionData.propTypes = {
  mission: PropTypes.shape(
    {
      id: PropTypes.string,
      name: PropTypes.string,
      description: PropTypes.string,
    },
  ),
  reserved: PropTypes.bool,
};

export default MissionData;
