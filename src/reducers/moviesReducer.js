import {
  MOVIES_REQUEST,
  INITIAL_STATE,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAIL,
} from '../constants';

const moviesReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case MOVIES_REQUEST:
      return { ...state, isFetching: true };
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: { ...state.movies, [payload.key]: payload.data },
        isFetching: false,
      };
    case GET_MOVIES_FAIL:
      return { ...state, error: payload, isFetching: false };
    default:
      return state;
  }
};

export default moviesReducer;
