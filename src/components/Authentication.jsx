import React from 'react'
import { NavLink } from 'react-router-dom'

function Authentication() {
    document.title ="Netflix | Authentication"

    return (
        <div className='auth-group'>


            <div className="login-section">

                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="login-card">
                            <h1>Sign in</h1>
                            <br />

                            <form action="" method="post">

                                {/* <div class="form-outline">
                                    <i class="fas fa-exclamation-circle trailing"></i>
                                    <input style={{border:'2px solid white',color:'white'}} type="text" id="form1" class="form-control auth-inp form-icon-trailing" />
                                    <label class="form-label" for="form1" style={{color:'white'}}>Email</label>
                                </div> */}

                                <label htmlFor="">Email</label>
                                <input type="email" name="" className='form-control auth-input' required placeholder='Email or Phone number' id="" /><br />
                                <label htmlFor="">Password</label>
                                <input type="password" name="" className='form-control auth-input' required placeholder='Password' id="" />
                                <br />
                                <button style={{ background: 'red' }} className="btn form-control btn-danger">
                                    Sign in
                                </button>

                                <br />
                                <br />
                                <div className="row">
                                    <div className="col-md-6">
                                        <input type="checkbox" className='checkbox' name=""  id="" /><span style={{ padding: '4px' }}>Remember me</span>
                                    </div>
                                    <div className="col-md-6">
                                        <NavLink
                                        to={'/'}
                                        exact>Need Help?</NavLink>
                                    </div>
                                    <br /><br /><br />
                                    <span>New to Netflix</span> <NavLink
                                        to={'/'}
                                        exact>Sign Up</NavLink>

                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-2"></div>

                </div>

            </div>

        </div>
    )
}

export default Authentication