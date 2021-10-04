import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import GlobalStyle from './styles/globalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path='/login' exact component={Login} />
      </Switch>
    </>
  );
}

export default App;
