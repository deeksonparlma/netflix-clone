import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
      <div className="nav">
        <div className='logo'>
          <NavLink
            to={'/'}
            exact
          >
            <img src="netflix-logo.png" alt="logo" />

          </NavLink>
        </div>

        <div className="auth">
          <NavLink
            to={'/authentication'}
            axact
          >
            <button className="sign-in btn btn-danger" style={{background:'red'}}>Sign In</button>

          </NavLink>
        </div>
      </div>
    </div>


  )
}

export default Nav