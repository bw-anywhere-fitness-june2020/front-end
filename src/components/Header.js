import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <NavLink to='/'>Login</NavLink>
      <NavLink to='/signup'>Sign Up</NavLink>
      <NavLink to='/clients'>Clients</NavLink>
    </div>
  )
}

export default Header