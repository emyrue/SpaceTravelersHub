// Actions
const SAVE = 'spacetravelershub/rockets/SAVE';

// Reducer
export default function reducer(state = [], action) {
  switch (action.type) {
    case SAVE:
      return action.array;
    default:
      return state;
  }
}

// Action Creators

export function saveRockets(array) {
  return () => ({
    array: array.map((rocket) => ({
      id: rocket.id,
      name: rocket.rocket_name,
      type: rocket.rocket_type,
      image: rocket.flickr_images[0],
    })),
  });
}
