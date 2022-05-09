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
    array,
  });
}
