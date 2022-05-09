// import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const data = [
  {
    id: 1,
    mission_name: 'Mission 1',
    description: 'The first mission',
  },
  {
    id: 2,
    mission_name: 'Mission 2',
    description: 'The second mission',
  },
  {
    id: 3,
    mission_name: 'Mission 3',
    description: 'The third mission',
  },
];

const Missions = () => (
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
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.mission_name}</td>
            <td>{item.description}</td>
            <td>
              <Button variant="secondary" size="sm">Not a member</Button>
            </td>
            <td>
              <Button variant="outline-secondary" size="sm">Join mission</Button>
            </td>
          </tr>
        ))}
      </tbody>

    </Table>
  </div>
);

export default Missions;
