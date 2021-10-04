import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import StyledLoginPage from '../styled-pages/Login.style';
import logo from '../images/logo.png';
import { ReactComponent as GoogleIcon } from '../images/google.svg';
import Button from '../styled-components/ButtonLogin.style';
import { Loader } from '../styled-components/Loader.style';

import { getMoviesTopRated } from '../thunks/moviesThunks';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      butonClicked: false,
    };
  }

  setLoggin = () => {
    this.setState({ butonClicked: true })
    setTimeout(() => {
      this.setState({ isLoggedIn: true });
    }, 3000)
  };

  onSubmitForm = (e) => {
    e.preventDefault();
  };

  getMovies = () => {
    const { getMoviesTopRated } = this.props;
    getMoviesTopRated();
  }

  handleLogin = () => {
    this.setLoggin();
    this.getMovies();
  }

  render() {
    const { isLoggedIn, butonClicked } = this.state;
    const { isFetching } = this.props;

    if (!isFetching && isLoggedIn) {
      return <Redirect to="/" />;
    }

    return (
      <StyledLoginPage>
        <div>
          <img src={logo} alt='logo' />
          <form onSubmit={this.onSubmitForm}>
            <input type='text' placeholder='E-mail' />
            <input type='password' placeholder='Senha' />
            <Button onClick={this.handleLogin} butonClicked={butonClicked}>
              {!butonClicked ? 'Entrar' : <Loader />}
            </Button>
          </form>
          <Button google>
            <GoogleIcon />
            Entrar com Google
          </Button>
        </div>
        <p>
          Ainda não tem cadastro? <span>Clique aqui</span> para se registrar.
        </p>
      </StyledLoginPage>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.moviesReducer.movies,
  isFetching: state.moviesReducer.isFetching,
})

const mapDispatchToProps = (dispatch) => ({
  getMoviesTopRated: () => dispatch(getMoviesTopRated()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
