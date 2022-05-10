import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const MissionData = (props) => {
  const { mission } = props;

  return (
    <tr>
      <td>{mission.name}</td>
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

MissionData.defaultProps = {
  mission: [],
};

MissionData.propTypes = {
  mission: PropTypes.shape(
    {
      name: PropTypes.string,
      description: PropTypes.string,
    },
  ),
};

export default MissionData;
