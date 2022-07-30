import { query, collection, getDocs, where } from 'firebase/firestore';
import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth, db, getUser, LogOut } from './Firebase'


function Dashboard() {
    document.title = "Netflix | Dashboard"
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [url, setIcon] = useState("volumeup.png");

    const [end, setVideo] = useState(true);
    const [muteStat, setMuteState] = useState(true);

    


    const fetchUserName = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
            setName('Welcome ' + data.name);
        } catch (err) {
            alert("An error occured while fetching user data");
            // console.error(err);
        }
    }


    if (user == null) {
        navigate("/authentication");
    }
    else {
        fetchUserName();
    }


    function signOut() {
        LogOut()
        navigate("/");
    }
    function hideVideoPlayer() {
        setVideo('hidden');
    }

    function muteVideo(){
        if(muteStat){
            setIcon("mute.png")
        }
        else{
            setIcon("volumeup.png")
        }
        setMuteState(!muteStat)
    }


    return (
        <div className='body'>

            <div className="top-video">
                <video src="trailer.mp4" className='top-rank-video' style={{ visibility: setVideo }} onAnimationEnd={hideVideoPlayer} onEnded={hideVideoPlayer} loop autoPlay muted={muteStat}></video>

                <div className="overlay">
                    <div className="x">
                        <div className="content">
                            <img className='top-logo-genre' src="logo192.png" alt="" />
                            <span>FILM</span>

                            <h3>JUSTICE SERVED</h3>
                            <p>A band of freedom fighters invade the trial of a white police officer who shot a Black man — and a hostage situation unfolds on screens nationwide</p>
                        </div>

                        <button onClick={muteVideo}>
                            <img src={url} alt="" />
                        </button>
                    </div>
                </div>

            </div>
            <br /><br /><br />
            <center>

                <h3 style={{ color: 'red' }}>{name}</h3>
                <button className='btn btn-info' onClick={() => signOut()}>Sign Out</button>
            </center>
        </div>
    )
}

export default Dashboard