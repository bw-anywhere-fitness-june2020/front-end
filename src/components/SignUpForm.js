import React, { useState } from 'react';
import { connect } from 'react-redux';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialSignUp = {
  name: '',
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
    axiosWithAuth()
      .post('auth/register', signUp)
      .then((res) => {
        console.log(res);
        setSignUp(initialSignUp);
      })
      .catch((err) => console.log(`Sign Up error: ${err}`));
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
        <button>Sign Up</button>
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

export default connect(mapStateToProps, {})(SignUpForm);
