import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import StyledHome from '../styled-pages/Home.style';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const { movies: { now_playing } } = this.props;
    
    return (
      <StyledHome>
        <Header movies={now_playing} />
      </StyledHome>
    )
  }
}

const mapStateToProps = (state) => ({
  movies: state.moviesReducer.movies,
})

export default connect(mapStateToProps, null)(Home)
