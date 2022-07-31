import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logInWithEmailAndPassword, registerWithEmailAndPassword, signInWithGoogle } from './Firebase';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { Bars, ThreeDots } from 'react-loader-spinner';

function Authentication() {
    document.title = "Netflix | Authentication"

    const [email, setEmail] = useState("");
    const [invalid_login, setError] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const [showLogin, setLogin] = useState('');
    const [showSignUp, setSignUp] = useState('none');
    const [isLoading, setLoading] = useState(false);
    const [googleIsLoading, setGoogleLoading] = useState(false);



    //sign up 
    const [signUpemail, setsignUpEmail] = useState("");
    const [signUpUsername, setUsername] = useState("");

    const [signUpPassword, setsignUpPassword] = useState("");

    const navigate = useNavigate();


    const login = async (email, password) => {
        if (email == null || password == null) {
            setError("Please fill all the fields");
        }
        else {
            setLoading(true)

            try {
                await signInWithEmailAndPassword(auth, email, password);
                navigate("/dashboard");
            } catch (err) {
                console.error(err);
                setError("Invalid login credentials");
                setLoading(false)

            }

        }
    };

    const signUp = async (name, email, password) => {

        if (name === "" || email === "" || password === "") {
            setError("Please fill all the fields");
        }
        else {
            setLoading(true)
            try {
                const res = await createUserWithEmailAndPassword(auth, email, password);
                const user = res.user;
                console.log(user + 'zzzzzz');
                await addDoc(collection(db, "users"), {
                    uid: user.uid,
                    name,
                    authProvider: "local",
                    email,
                });

                navigate("/dashboard");
            } catch (err) {
                setError(err.toString());
                setLoading(false)
                // alert(err.message);
            }
        }
    };


    function hideLogin() {
        setLogin('none');
        setSignUp('');
    }
    function hideSignUp() {
        setLogin('');
        setSignUp('none');
    }

    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }

        if (user) navigate("/dashboard");
    }, [user, loading]);

    return (
        <div className='auth-group'>


            <div style={{ display: showLogin }} className="login-section">

                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="login-card">
                            <h1>Sign in</h1>
                            <br />

                            {/* <form> */}
                            <p className='error'>{invalid_login}</p>


                            <label htmlFor="">Email</label>
                            <input type="email" name="" className='form-control auth-input' required placeholder='Email or Phone number' id="" onChange={(e) => setEmail(e.target.value) & setError('')} /><br />
                            <label htmlFor="">Password</label>
                            <input type="password" name="" className='form-control auth-input' required placeholder='Password' id="" onChange={(e) => setPassword(e.target.value) & setError('')} />
                            <br />
                            <button style={{ background: 'red',alignItems:'center' }} className="btn form-control btn-danger" onClick={() => login(email, password)}>
                                {isLoading ? <center><ThreeDots color="#ffffff" height={20} width={100} /></center> : 'Sign in'}
                            </button>
                            <br />
                            <br />
                            <button className="login__btn btn btn-info form-control" onClick={signInWithGoogle}>
                                Login with Google
                            </button>


                            <br />
                            <br />
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="checkbox" className='checkbox' name="" id="" /><span style={{ padding: '4px' }}>Remember me</span>
                                </div>
                                <div className="col-md-6">
                                    <NavLink
                                        to={'/'}
                                        exact>Need Help?</NavLink>
                                </div>
                                <br /><br /><br />
                                <span onClick={hideLogin}>New to Netflix</span>
                                <a onClick={hideLogin}> Sign Up </a>

                            </div>
                            {/* </form> */}
                        </div>
                    </div>
                    <div className="col-md-2"></div>

                </div>

            </div>

            {/* sign up */}

            <div style={{ display: showSignUp }} className="login-section">

                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="login-card">
                            <h1>Sign Up</h1>
                            <br />

                            {/* <form> */}
                            <p className='error'>{invalid_login}</p>

                            {/* <div class="form-outline">
                                    <i class="fas fa-exclamation-circle trailing"></i>
                                    <input style={{border:'2px solid white',color:'white'}} type="text" id="form1" class="form-control auth-inp form-icon-trailing" />
                                    <label class="form-label" for="form1" style={{color:'white'}}>Email</label>
                                </div> */}

                            <label htmlFor="">Username</label>
                            <input type="text" name="" className='form-control auth-input' required placeholder='username' id="" onChange={(e) => setUsername(e.target.value) & setError('')} /><br />
                            <label htmlFor="">Sign up Email</label>
                            <input type="email" name="" className='form-control auth-input' required placeholder='Email or Phone number' id="" onChange={(e) => setsignUpEmail(e.target.value) & setError('')} /><br />
                            <label htmlFor="">sign up Password</label>
                            <input type="password" name="" className='form-control auth-input' required placeholder='Password' id="" onChange={(e) => setsignUpPassword(e.target.value) & setError('')} />
                            <br />
                            <button style={{ background: 'red' }} className="btn form-control btn-danger" onClick={() => signUp(signUpUsername, signUpemail, signUpPassword)}>
                            {isLoading ? <center><ThreeDots color="#ffffff" height={20} width={100} /></center> : 'Sign Up'}
                                
                            </button>
                            <br />
                            <br />
                            <button className="login__btn btn btn-info form-control" onClick={signInWithGoogle}>
                                Login with Google
                            </button>


                            <br />
                            <br />
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="checkbox" className='checkbox' name="" id="" /><span style={{ padding: '4px' }}>Remember me</span>
                                </div>
                                <div className="col-md-6">
                                    <NavLink
                                        to={'/'}
                                        exact>Need Help?</NavLink>
                                </div>
                                <br /><br /><br />
                                <span onClick={hideSignUp}>Already have a Netflix account ?</span>
                                <a onClick={hideSignUp}> Login  </a>

                            </div>
                            {/* </form> */}
                        </div>
                    </div>
                    <div className="col-md-2"></div>

                </div>

            </div>

        </div>
    )
}

export default Authentication