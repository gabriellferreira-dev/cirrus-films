// import Slider from 'react-slick';
import { StyledSlider } from '../styled-components/Slider.style';
import { StyledImage } from '../styled-components/SliderImage.style';

const MoviesSlider = ({ movies, nowPlaying }) => {
  return (
    <StyledSlider nowPlaying>
      {movies.map((movie, i) => {
        let imagePath = `http://image.tmdb.org/t/p/w500${movie.poster_path}`;

        if (nowPlaying) {
          imagePath = `http://image.tmdb.org/t/p/w500${movie.images.backdrops[0].file_path}`;
        }

        return (
          <div key={i}>
            <StyledImage
              nowPlaying={nowPlaying}
              src={imagePath}
              alt='movie poster'
              className={`movie-${i}`}
            />

            {nowPlaying && (
              <div>
                <span>18:00</span>
                <span>20:00</span>
              </div>
            )}
          </div>
        );
      })}
    </StyledSlider>
  );
};

export default MoviesSlider;
