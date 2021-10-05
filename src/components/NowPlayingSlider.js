import React from 'react';
import StyledNowPlayingSlider from '../styled-components/NowPlayingSlider.style';
import { StyledImage } from '../styled-components/SliderImage.style';

const NowPlayingSlider = ({movies}) => {
  return (
    <StyledNowPlayingSlider>
      {movies.map((movie, i) => {
        const posterPath = `http://image.tmdb.org/t/p/w500${movie.poster_path}`;

        return (
          <StyledImage
            key={i}
            src={posterPath}
            alt='movie poster'
            className={`movie-${i}`}
          />
        );
      })}
    </StyledNowPlayingSlider>
  );
  }

  export default NowPlayingSlider;