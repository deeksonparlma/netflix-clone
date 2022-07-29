import React from 'react'

function Feature(props) {

    if (props.position === 'left') {
        return (
            <div className="row f-r">

                <div className="col-md-4 ">
                    <div className="desc">

                        <h1>{props.title}</h1>
                        <h5>{props.desc}</h5>
                    </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-7">
                    <img className='feature-image' src={props.img} alt="" />
                </div>
            </div>
        )
    } else {
        return (
            <div className="row f-r">
                <div className="col-md-7">
                    <img className='feature-image' src={props.img} alt="" />

                </div>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <div className="desc">

                        <h1>{props.title}</h1>
                        <h5>{props.desc}</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default Feature