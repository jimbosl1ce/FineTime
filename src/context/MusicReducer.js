import React from 'react';
import {
  ERROR,
  SELECT_CITY,
  GET_SHOWS,
} from './types.js';

// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case SELECT_CITY:
      return {
        ...state,
        selectedCity: action.payload
      }
    case GET_SHOWS: {
      return {
        ...state,
        shows: action.payload
      }
    }
    case ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
}