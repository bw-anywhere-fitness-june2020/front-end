import React, { useState } from 'react';

const LoginForm = ( props ) => {
  const [ login, setLogin ] = useState( {
    username: '',
    password: '',
  } );

  const handleChange = ( e ) => {
    e.preventDefault();
    setLogin( {
      ...login,
      [ e.target.name ]: e.target.value,
    } );
  };

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <>
      <form onSubmit={ handleSubmit }>
        <input
          type='text'
          name='username'
          placeholder='username'
          value={ props.username }
          onChange={ handleChange }
        />
        <input
          type='password'
          name='password'
          placeholder='password'
          value={ props.password }
          onChange={ handleChange }
        />
        <button>Login</button>
      </form>
    </>
  )
};

export default LoginForm
