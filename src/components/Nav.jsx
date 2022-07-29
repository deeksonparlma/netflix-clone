import React from 'react'

const Nav = () => {
  return (
    <div>
      <div className="nav">
        <div className='logo'>
          <img src="netflix-logo.png" alt="logo" />
        </div>

        <div className="auth">
          <button className="sign-in btn btn-danger">Sign In</button>
        </div>
      </div>
    </div>


  )
}

export default Nav