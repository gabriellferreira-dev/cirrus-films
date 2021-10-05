import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import StyledLoginPage from '../styled-pages/Login.style';
import logo from '../images/logo.png';
import { ReactComponent as GoogleIcon } from '../images/google.svg';
import Button from '../styled-components/ButtonLogin.style';
import { Loader } from '../styled-components/Loader.style';

import { moviesNowPlaying, moviesupcoming } from '../thunks/moviesThunks';

import { setLogin as setLoginAction } from '../actions/index';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      butonClicked: false,
    };
  }

  onSubmitForm = (e) => {
    e.preventDefault();
  };

  getMovies = async () => {
    const { getMoviesNowPlaying, getMoviesupcoming } = this.props;
    await getMoviesNowPlaying();
    await getMoviesupcoming();
  };

  handleLogin = () => {
    const { setLogin } = this.props;
    this.getMovies();

    this.setState({ butonClicked: true });
    setTimeout(() => {
      setLogin();
    }, 3000);
  };

  render() {
    const { butonClicked } = this.state;
    const { isFetching, isLogged } = this.props;

    // if (!isFetching && isLogged) {
    //   return <Redirect to='/' />;
    // }

    return (
      <StyledLoginPage>
        {!isFetching && isLogged && <Redirect to='/' />}
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
  isFetching: state.moviesReducer.isFetching,
  isLogged: state.loginReducer.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  getMoviesNowPlaying: () => dispatch(moviesNowPlaying()),
  getMoviesupcoming: () => dispatch(moviesupcoming()),
  setLogin: () => dispatch(setLoginAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
