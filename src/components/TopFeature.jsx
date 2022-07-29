import React from 'react'

function TopFeature(props) {

    
        return (
            <div className="row">

                <div className="col-md-4 ">
                    <div className="desc">

                        <h1>{props.title}</h1>
                        <h5>{props.desc}</h5>

                    </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-7" style={{padding:'10px'}}>
                    {/* <img src="tv.png" alt="" className='tv-overlay' /> */}
                    <video src="bg.m4v" className='container' loop autoPlay muted playsInline></video>
                </div>
            </div>
        )

}

export default TopFeature
