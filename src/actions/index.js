import {
  GET_MOVIES_FAIL,
  MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
  SET_LOGIN,
} from '../constants';

export const requestMovies = () => ({
  type: MOVIES_REQUEST,
});

export const getMoviesSucess = (key, data) => ({
  type: GET_MOVIES_SUCCESS,
  payload: { key, data },
});

export const getMoviesFail = (error) => ({
  type: GET_MOVIES_FAIL,
  payload: error,
});

export const setLogin = () => ({
  type: SET_LOGIN,
})
