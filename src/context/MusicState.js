import React, { useReducer } from 'react';
import MusicContext from './MusicContext';
import MusicReducer from './MusicReducer';
import axios from 'axios';
import {
  SELECT_CITY,
  GET_SHOWS,
  ERROR
} from './types.js';

// goal: get style / get product

const MusicState = ({ children }) => {
  const initalState = {
    shows: null,
    selectedCity: null,
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

  // EXAMPLES...
  // const getProductStyles = async (productId) => {
  //   try {
  //     const res = await axios.get(`/products/${productId}/styles`)
  //     dispatch({
  //       type: GET_PRODUCT_STYLES,
  //       payload: res.data.results
  //     })
  //   } catch (err) {
  //     dispatch({
  //       type: ERROR,
  //       payload: err.message
  //     })
  //   }
  // }

  // EXAMPLE OF LOCAL STATE CHANGE
  // const changeProduct = (productId) => {
  //   dispatch({
  //     type: CHANGE_PRODUCT,
  //     payload: productId
  //   })
  // }

  // EXAMPLE OF SERVER REQUEST
  // const getMetaData = (productId) => {
  //   console.log(productId);
  //   axios.get(`/productmeta/${productId}`)
  //   .then(data => {
  //     // setMeta(data.data)
  //     dispatch({
  //       type: GET_PRODUCT_META,
  //       payload: data.data
  //     });
  //   })
  //   .catch(err => {
  //     dispatch({
  //       type: ERROR,
  //       payload: err.message
  //     });
  //   });
  // }

  return (
    <MusicContext.Provider value={{
      selectedCity: state.selectedCity,
      shows: state.shows,
      selectCity,
      loadShows
    }}>
      { children }
    </MusicContext.Provider>
  )
}

export default MusicState;