import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { postUser } from '../actions/index';

const initialSignUp = {
  username: '',
  password: '',
  userpermisions: null,
};

const SignUpForm = (props) => {
  const [signUp, setSignUp] = useState(initialSignUp);

  const { push } = useHistory();

  const handleChange = (e) => {
    e.preventDefault();
    setSignUp({
      ...signUp,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.postUser(signUp);
    push('/');
  };

  const checkboxChange = (e) => {
    setSignUp({
      ...signUp,
      userpermisions: 23412,
    });
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
        <label>
          Check box if you are an instructor
          <input
            type='checkbox'
            name='userpermisions'
            value={props.userpermisions}
            onChange={checkboxChange}
            className='checkbox'
          />
        </label>

        <button className='btn'>Sign Up</button>
      </form>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
    error: state.error,
  };
};

export default connect(mapStateToProps, { postUser })(SignUpForm);
