import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import rocketReducer, { saveRockets, reserveRocket } from './redux/rockets/rockets';
import missionReducer, { joinMission, leaveMission } from './redux/missions/missions';
import store from './redux/configureStore';
import App from './App';
import icon from '../public/favicon.ico';

test('renders site', () => {
  const site = render(<Provider store={store}><App /></Provider>);
  expect(site).toMatchSnapshot();
});

describe('rocket action creators work', () => {
  test('save rockets action creator works', () => {
    const state = [
      {
        id: 1,
        rocket_name: 'rocket',
        description: 'it\'s a rocket',
        flickr_images: [icon],
      },
    ];
    const expectedState = [
      {
        id: 1,
        name: 'rocket',
        description: 'it\'s a rocket',
        image: icon,
        reserved: false,
      },
    ];
    const action = saveRockets(state);
    expect(rocketReducer(state, action())).toStrictEqual(expectedState);
  });
  test('reserve rockets action creator works', () => {
    const state = [
      {
        id: 1,
        name: 'rocket',
        description: 'it\'s a rocket',
        image: icon,
        reserved: false,
      },
    ];
    const expectedState = [
      {
        id: 1,
        name: 'rocket',
        description: 'it\'s a rocket',
        image: icon,
        reserved: true,
      },
    ];
    const action = reserveRocket(1);
    expect(rocketReducer(state, action())).toStrictEqual(expectedState);
  });

  test('join mission action creator works', () => {
    const state = [
      {
        id: 1,
        mission_name: 'Mission 1',
        description: 'This is the first mission',
        reserved: false,
      },
    ];
    const expectedState = [
      {
        id: 1,
        mission_name: 'Mission 1',
        description: 'This is the first mission',
        reserved: true,
      },
    ];
    const action = joinMission(state[0].id);
    expect(missionReducer(state, action)).toStrictEqual(expectedState);
  });
  test('leave mission action creator works', () => {
    const state = [
      {
        id: 1,
        mission_name: 'Mission 1',
        description: 'This is the first mission',
        reserved: true,
      },
    ];
    const expectedState = [
      {
        id: 1,
        mission_name: 'Mission 1',
        description: 'This is the first mission',
        reserved: false,
      },
    ];
    const action = leaveMission(state[0].id);
    expect(missionReducer(state, action)).toStrictEqual(expectedState);
  });
});
