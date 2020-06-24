import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchUser } from '../actions';

const LoginForm = (props) => {
  const [login, setLogin] = useState({
    username: '',
    password: '',
  });

  const { push } = useHistory();

  const handleChange = (e) => {
    e.preventDefault();
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.fetchUser(login);
    push('/clients');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='username'
          placeholder='username'
          value={props.username}
          onChange={handleChange}
        />
        <input
          type='password'
          name='password'
          placeholder='password'
          value={props.password}
          onChange={handleChange}
        />
        <button className='btn'>Login</button>
      </form>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    users: state.users,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchUser })(LoginForm);
