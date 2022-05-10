import retrieveMissions from './missionsAPI';

const FETCHED_MISSIONS = 'SpaceTravelersHub/missions/RETRIEVED_MISSIONS';
const JOINED_MISSION = 'SpaceTravelersHub/missions/JOINED_MISSION';
const LEFT_MISSION = 'SpaceTravelersHub/missions/LEFT_MISSION';

const initialState = [];

// Action Creators
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

export const joinMission = (id) => ({
  type: JOINED_MISSION,
  payload: id,
});

export const leaveMission = (id) => ({
  type: LEFT_MISSION,
  payload: id,
});

// Reducer
const missionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case FETCHED_MISSIONS:
      return action.payload;

    case JOINED_MISSION:
      newState = state.map((mission) => {
        if (mission.id !== action.payload) return mission;
        return {
          ...mission, reserved: true,
        };
      });
      return newState;

    case LEFT_MISSION:
      newState = state.map((mission) => {
        if (mission.id !== action.payload) return mission;
        return {
          ...mission, reserved: false,
        };
      });
      return newState;

    default:
      return state;
  }
};

export default missionReducer;
