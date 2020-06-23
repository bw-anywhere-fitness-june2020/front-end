import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
// import PrivateRoute from './utils/PrivateRoute'

import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm'

import './App.css';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <h1>Welcome to AnywhereFitness</h1>
        <Route exact path = '/' component={LoginForm} />
        <Route exact path = '/signup' component = {SignUpForm} />
      </div>
    </Router>
  );
};

export default App;
