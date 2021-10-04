import { getMoviesFail, getMoviesSucess, requestMovies } from '../actions';
import { allMovies, recommendations, topRated } from '../services/fetchMovies';

export const getMovies = () => async (dispatch) => {
  dispatch(requestMovies);
  const movies = await allMovies();
};

export const moviesTopRated = () => async (dispatch) => {
  dispatch(requestMovies());
  const movies = await topRated();

  if (!movies.results) return dispatch(getMoviesFail(movies.status_message));

  return dispatch(getMoviesSucess('top_rated', movies.results));
};

export const moviesRecommended = (movie_id) => async (dispatch) => {
  dispatch(requestMovies());
  const movies = await recommendations(movie_id);

  if (!movies.results) return dispatch(getMoviesFail(movies.status_message));

  return dispatch(getMoviesSucess('recommended', movies.results));
};
