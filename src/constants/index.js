
export const MOVIES_REQUEST = 'MOVIES_REQUEST';
export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';
export const GET_MOVIES_FAIL = 'GET_MOVIES_FAIL';
export const SET_LOGIN = 'SET_LOGIN';

// FETCH CONFIG
export const URL_BASE = 'https://api.themoviedb.org/3/movie';
export const LANGUAGE = 'pt-BR';
export const KEY = '70da466e066a15e9925917816d96e861';

export const INITIAL_STATE = {
  movies: [],
  isFetching: false,
  isLogged: false,
}
