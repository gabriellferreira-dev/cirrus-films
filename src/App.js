import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import GlobalStyle from './styles/globalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' component={Login} />
      </Switch>
    </>
  );
}

export default App;
