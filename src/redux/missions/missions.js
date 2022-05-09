import retrieveMissions from './missionsAPI';

const FETCHED_MISSIONS = 'SpaceTravelersHub/missions/RETRIEVED_MISSIONS';

const initialState = [];

// Action Creator
export const getMissions = () => async (dispatch) => {
  const allMissions = await retrieveMissions();

  const missions = allMissions.map((mission) => (
    {
      id: mission.mission_id,
      name: mission.mission_name,
      description: mission.description,
    }
  ));

  dispatch({
    type: FETCHED_MISSIONS,
    payload: missions,
  });
};

// Reducer
const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHED_MISSIONS:
      return action.payload;
    default:
      return state;
  }
};

export default missionReducer;
