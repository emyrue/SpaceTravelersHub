import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rocketReducer from './rockets/rockets';
import missionReducer from './missions/missions';

const rootReducer = combineReducers({
  rockets: rocketReducer,
  missions: missionReducer,
});

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

export default store;
