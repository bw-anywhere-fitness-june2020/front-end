import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';

import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import InstructorForm from './components/InstructorForm';
import Classes from "./components/Classes";

import Header from './components/Header';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Header />
        <h1>{`Anywhere Fitness`}</h1>
        <Route exact path='/' component={LoginForm} />
        <Route exact path='/signup' component={SignUpForm} />
        <PrivateRoute exact path='/classes' component={Classes} />
        <PrivateRoute exact path='/instructors' component={InstructorForm}/>
      </div>
    </Router>
  );
};

export default App;
