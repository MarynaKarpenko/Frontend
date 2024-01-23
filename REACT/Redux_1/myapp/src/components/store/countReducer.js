import { combineReducers, createStore } from 'redux';

const defaultState = 0

const INCR = 'INCR'
const DECR = 'DECR'
const NULL = 'NULL'

export const countReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INCR:
      return state + action.payload;
    case DECR:
      return state - action.payload;
    case NULL:
      return 0;
    default:
      return state;
  }
};

export const incrAction = (payload) => ({type: INCR, payload})
export const decrAction = (payload) => ({type: DECR, payload})
export const nullAction = (payload) => ({type: NULL, payload})