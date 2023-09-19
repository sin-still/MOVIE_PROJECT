import React from 'react';




const Movie = ({movie, removeMovie}) => {
    return (
        <div>
            <div className="movie">
                <div className="movie-title">{ movie.title }
                    <span className="movie-year">{ movie.year }</span>
                </div>
                <div><button onClick={()=>removeMovie(movie.id)}>❌</button></div>
                
            </div>
        </div>
    );
};

export default Movie;