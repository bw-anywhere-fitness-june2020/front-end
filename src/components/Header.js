import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <NavLink to='/' className='nav-links'>Login</NavLink>
      <NavLink to='/signup' className='nav-links'>Sign Up</NavLink>
      <NavLink to='/instructors' className='nav-links'>Add Class</NavLink>
      <NavLink to='/classes' className='nav-links'>Classes</NavLink>
      <NavLink to='/' onClick={() => localStorage.removeItem('token')} className='nav-links'>Logout</NavLink>
    </nav>
  )
}

export default Header