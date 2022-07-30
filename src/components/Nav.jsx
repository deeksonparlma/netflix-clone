import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom'
import { auth, getUser } from './Firebase';

const Nav = (props) => {

  const [user, loading, error] = useAuthState(auth);
  const [isLoggedIn,setLoggedIn] = useState('');

  
  // props.Logged == null ?  setLoggedIn(' ') : setLoggedIn('none');

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
            style={{display: isLoggedIn}}
          >
            <button className="sign-in btn btn-danger" style={{background:'red' }}>Sign In</button>

          </NavLink>
        </div>
      </div>
    </div>


  )
}

export default Nav