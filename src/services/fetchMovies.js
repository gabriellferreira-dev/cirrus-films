import { KEY, LANGUAGE, URL_BASE } from '../constants';

export const allMovies = async () => {
  const response = await fetch();
  const data = await response.json();
  return data;
};

export const topRated = async () => {
  try {
    const response = await fetch(
      `${URL_BASE}/top_rated?api_key=${KEY}&language=${LANGUAGE}&page=1`
      );
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
};

export const recommendations = async (movie_id) => {
  try {
    const response = await fetch(
      `${URL_BASE}/${movie_id}/recommendations?api_key=${KEY}&language=${LANGUAGE}&page=1`
      );
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
};

export const nowPlaying = async () => {
  try {
    const response = await fetch(
      `${URL_BASE}/now_playing?api_key=${KEY}&language=${LANGUAGE}&page=1`
      );
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
};

export const upcomingReleases = async () => {
  try {
    const response = await fetch(
      `${URL_BASE}/upcoming?api_key=${KEY}&language=${LANGUAGE}&page=1`
      );
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
};