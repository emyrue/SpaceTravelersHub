import { useSelector, useDispatch } from 'react-redux';
import { reserveRocket } from '../../redux/rockets/rockets';
import { Table, Button } from 'react-bootstrap';

export default function ReservedRockets() {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  const activeRockets = rockets.filter((rocket) => rocket.reserved);
  if (activeRockets.length === 0) {
    return (
      <Table striped bordered>
        <tbody>
          <tr>
            <td>Reserved Rockets will appear here</td>
          </tr>
        </tbody>
      </Table>
    );
  }
  const cancel = (id) => {
    const action = reserveRocket(id)();
    dispatch(action);
  };
  return (
    <Table striped bordered>
      <tbody>
      {activeRockets.map((rocket) => (
        <tr key={rocket.id}>
          <td className="d-flex justify-content-between align-items-center">
          {rocket.name}
          <Button variant="outline-danger" className="cancel" onClick={() => { cancel(rocket.id); }}>Cancel Reservation</Button>
          </td>
        </tr>
      ))}
      </tbody>
    </Table>
  );
}
