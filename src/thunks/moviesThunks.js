import { getMoviesFail, getMoviesSucess, requestMovies } from '../actions';
import { allMovies, topRated } from '../services/fetchMovies';

export const getMovies = () => async (dispatch) => {
  dispatch(requestMovies);
  const movies = await allMovies();
};

export const getMoviesTopRated = () => async (dispatch) => {
  dispatch(requestMovies());
  const movies = await topRated();

  if (!movies.results) return dispatch(getMoviesFail());

  return dispatch(getMoviesSucess(movies.results));
};
