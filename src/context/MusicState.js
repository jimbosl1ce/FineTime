import React, { useReducer } from 'react';
import MusicContext from './MusicContext';
import MusicReducer from './MusicReducer';
import axios from 'axios';
import {
  SELECT_CITY,
  GET_SHOWS,
  SELECT_SHOW,
  ERROR
} from './types.js';

// goal: get style / get product

const MusicState = ({ children }) => {
  const initalState = {
    shows: [],
    selectedCity: null,
    selectedShow: null,
    error: null,
  }

  const [state, dispatch] = useReducer(MusicReducer, initalState);

   const selectCity = (cityName) => {
    dispatch({
      type: SELECT_CITY,
      payload: cityName
    })
  };

  const loadShows = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/shows`);
      dispatch({
        type: GET_SHOWS,
        payload: res.data
      })
    } catch (err) {
      dispatch({
        type: ERROR,
        payload: err.message
      })
    }
  };

  const setSelectedShow = (selectedShow) => {
    dispatch({
      type: SELECT_SHOW,
      payload: selectedShow
    })
  }

  return (
    <MusicContext.Provider value={{
      selectedCity: state.selectedCity,
      selectedShow: state.selectedShow,
      shows: state.shows,
      selectCity,
      loadShows,
      setSelectedShow
    }}>
      { children }
    </MusicContext.Provider>
  )
}

export default MusicState;