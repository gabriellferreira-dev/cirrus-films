import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Header from '../components/Header';
import MoviesSlider from '../components/Slider';
import { StyledCardsSection } from '../styled-components/CardsSection.style';
import StyledHome from '../styled-pages/Home.style';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      movies: { now_playing, upcoming },
      isLogged,
    } = this.props;

    if (!isLogged) {
      return <Redirect to='/login' />;
    }

    const nowPlaying = now_playing.slice(0, 3);
    const moviesWeek = now_playing.slice(0, 10);

    return (
      <StyledHome>
        <Header movies={now_playing} />
        <StyledCardsSection nowPlaying>
          <p>Em cartaz hoje</p>
          <MoviesSlider movies={nowPlaying} nowPlaying />
        </StyledCardsSection>
        <StyledCardsSection >
          <p>04/10 a 10/10</p>
          <MoviesSlider movies={moviesWeek} />
        </StyledCardsSection>
        <StyledCardsSection>
          <p>Próximos lançamentos</p>
          <MoviesSlider movies={upcoming} />
        </StyledCardsSection>
      </StyledHome>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.moviesReducer.movies,
  isLogged: state.loginReducer.isLogged,
});

export default connect(mapStateToProps, null)(Home);
