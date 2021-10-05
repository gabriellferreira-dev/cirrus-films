import { getMoviesFail, getMoviesSucess, requestMovies } from '../actions';
import {
  movieImages,
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

  const moviesWithImages = await Promise.all(movies.results.map(async (movie, i) => {
    const images = await movieImages(movie.id);
    return {
      ...movie,
      images,
    };
  }));

  console.log(moviesWithImages)

  return dispatch(getMoviesSucess('now_playing', moviesWithImages));
};

export const moviesupcoming = () => async (dispatch) => {
  dispatch(requestMovies());
  const movies = await upcomingReleases();

  if (!movies.results) return dispatch(getMoviesFail(movies.status_message));

  return dispatch(getMoviesSucess('upcoming', movies.results));
};
