import { getMoviesFail, getMoviesSucess, requestMovies } from '../actions';
import {
  nowPlaying,
  recommendations,
  topRated,
  upcomingReleases,
} from '../services/fetchMovies';

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

export const moviesNowPlaying = () => async (dispatch) => {
  dispatch(requestMovies());
  const movies = await nowPlaying();

  if (!movies.results) return dispatch(getMoviesFail(movies.status_message));

  return dispatch(getMoviesSucess('now_playing', movies.results));
};

export const moviesUpcomming = () => async (dispatch) => {
  dispatch(requestMovies());
  const movies = await upcomingReleases();

  if (!movies.results) return dispatch(getMoviesFail(movies.status_message));

  return dispatch(getMoviesSucess('upcomming', movies.results));
};
