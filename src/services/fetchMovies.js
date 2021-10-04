const LANGUAGE = 'pt-BR';
const KEY = '70da466e066a15e9925917816d96e861';

export const allMovies = async () => {
  const response = await fetch();
  const data = await response.json();
  return data;
};

export const topRated = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${KEY}&language=${LANGUAGE}&page=1`
      );
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
};
