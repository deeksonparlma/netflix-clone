import React from 'react'

function JoinForm() {
    return (
        <div>
            <center>
                <p style={{ color: 'white' }}>Ready to watch, Enter your email to create or restart your memembership</p>

            </center>
            <form className='join-form form-group' action="" method="post">
                <div className="row">
                    <div className="inp col-md-8">
                        <input type="email" required style={{ borderRadius: '4px' }} className='form-control' placeholder='Email address' />
                    </div>
                    <div className="inp_btn col-md-3">

                        <button className="form-control btn btn-danger">Sign Up</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default JoinForm