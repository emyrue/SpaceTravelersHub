// Actions
const SAVE = 'spacetravelershub/rockets/SAVE';
const RESERVE = 'spacetravelershub/rockets/RESERVE';

// Reducer
export default function reducer(state = [], action) {
  let newState;
  switch (action.type) {
    case SAVE:
      return action.array;
    case RESERVE:
      newState = state.map((rocket) => {
        if (action.id === rocket.id) {
          return {
            ...rocket,
            reserved: !rocket.reserved,
          };
        }
        return rocket;
      });
      return newState;
    default:
      return state;
  }
}

// Action Creators

export function saveRockets(array) {
  return () => ({
    type: SAVE,
    array: array.map((rocket) => ({
      reserved: false,
      id: rocket.id,
      name: rocket.rocket_name,
      description: rocket.description,
      image: rocket.flickr_images[0],
    })),
  });
}

export function reserveRocket(id) {
  return () => ({
    type: RESERVE,
    id,
  });
}
