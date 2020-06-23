import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';

import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import ClientForm from './components/ClientForm';
import Header from './components/Header';

import './App.css';

const App = (props) => {
  return (
    <Router>
      <div className='App'>
        <Header />
        <h1>{`AnywhereFitness`}</h1>
        <Route exact path='/' component={LoginForm} />
        <Route exact path='/signup' component={SignUpForm} />
        <PrivateRoute exact path='/clients' component={ClientForm} />
      </div>
    </Router>
  );
};

export default App;
