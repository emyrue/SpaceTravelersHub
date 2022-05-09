import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

// import { useDispatch } from 'react-redux';

const Mission = (props) => {
  const { mission } = props;
  // const dispatch = useDispatch();

  return (
    <tr>
      <td>{mission.mission_name}</td>
      <td>{mission.description}</td>
      <td>
        <Button variant="secondary" size="sm">Not a member</Button>
      </td>
      <td>
        <Button variant="outline-secondary" size="sm">Join mission</Button>
      </td>
    </tr>
  );
};

Mission.defaultProps = {
  mission: [],
};

Mission.propTypes = {
  mission: PropTypes.shape(
    {
      mission_name: PropTypes.string,
      description: PropTypes.string,
    },
  ),
};

export default Mission;
