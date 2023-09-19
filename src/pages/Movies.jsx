import React, { useState } from 'react';
import Movie from '../components/Movie';
import MovieForm from '../components/MovieForm';

const Movies = () => {
    const [ movies, setMovies ] = useState([
        { id:1, title : '밀수' , year: 2023 },
        { id:2, title : '바비' , year: 2023 },
        { id:3, title : '공조' , year: 2017 },
    ]);
    
    const removeMovie=(id)=>{
        setMovies(movies.filter(movie=>{
            return movie.id !== id;
        }))
    }   

    const randerMovies =movies.length ?  movies.map((movie)=>{
        return (
        <Movie movie={movie} key={movie.id} removeMovie={removeMovie}/>
        //빨간색 movie는 props, 속성값은 맵함수의 데이터를 불러오기 위한 매개변수
        )
    }) : <div className='text-center'>영화가 없습니다. 영화를 추가해주세요.</div>
    //addMovie
    const addMovie = (movie) =>{
        setMovies([
            ...movies,
            movie
        ])
    }

  return (
    <div className='moviesWrap'>
        <h1>Movie List</h1>
        <MovieForm addMovie={ addMovie } />
        {randerMovies}
    </div>
  );
    
};

export default Movies;