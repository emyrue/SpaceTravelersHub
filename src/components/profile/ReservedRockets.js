import { useSelector } from 'react-redux';

export default function ReservedRockets() {
  const rockets = useSelector((state) => state.rockets);
  const activeRockets = rockets.filter((rocket) => rocket.reserved);
  return (
    activeRockets.map((rocket) => <li key={rocket.id} className="reserved-rocket">{rocket.name}</li>)
  );
}
