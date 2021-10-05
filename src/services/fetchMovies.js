import { KEY, LANGUAGE, URL_BASE } from '../constants';

// export const allMovies = async () => {
//   const response = await fetch();
//   const data = await response.json();
//   return data;
// };

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

// busca filmes recomendados com base no id de um filme.
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

// busca filmes em cartaz
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

// busca os próximos lançamentos
export const upcomingReleases = async () => {
  try {
    const response = await fetch(
      `${URL_BASE}/upcoming?api_key=${KEY}&language=${LANGUAGE}&page=2`
      );
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
};

export const movieImages = async (movie_id) => {
  try {
    const response = await fetch(
      `${URL_BASE}/${movie_id}/images?api_key=${KEY}&language=pt`
      );
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
}