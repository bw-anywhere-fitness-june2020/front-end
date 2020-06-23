import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postUser } from '../actions';

const initialSignUp = {
  username: '',
  password: '',
};

const SignUpForm = (props) => {
  const [signUp, setSignUp] = useState(initialSignUp);

  const handleChange = (e) => {
    e.preventDefault();
    setSignUp({
      ...signUp,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signUp);
    props.postUser(signUp);
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
