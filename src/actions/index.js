import {
  GET_MOVIES_FAIL,
  MOVIES_REQUEST,
  GET_MOVIES_SUCCESS,
} from '../constants';

export const requestMovies = () => ({
  type: MOVIES_REQUEST,
});

export const getMoviesSucess = (key, movies) => ({
  type: GET_MOVIES_SUCCESS,
  payload: { key, movies },
});

export const getMoviesFail = (error) => ({
  type: GET_MOVIES_FAIL,
  payload: error,
});
