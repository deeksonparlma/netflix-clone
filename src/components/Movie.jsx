import React from 'react'

function Movie(props) {

    const movieClicked =() =>{
        props.onClick(props.movie)
        props.display()
    
    }
    return (
        <div onClick={movieClicked} className="movie" style={{ backgroundImage: `url(${props.movie.url})` }}>
            {/* <img src={movie.url} alt="" /> */}
            <h4 className='movie-title'>{props.movie.title}</h4>
        </div>
    )
}

export default Movie