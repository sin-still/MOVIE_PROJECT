import React, { useState } from 'react';

const MovieForm = ({ addMovie }) => {
    const [ movieTitle, setMovieTitle ] = useState('');
    const [ movieYear, setMovieYear ] = useState('');
    const [lastId, setLastId] = useState(4); 
    const [titleError, setTitleError] = useState('');
    const [yearError, setYearError] = useState('');
    

    const resetForm = ()=> {
        setMovieTitle('');
        setMovieYear('');
    }
    
    const validateForm = ()=> {
        resetErrors();
        let validated = true;
        if ( !movieTitle ) {
            setTitleError('영화제목을 넣어주세요.') 
            validated = false;
        }
        if ( !movieYear ) {
            setYearError('영화년도을 넣어주세요.') 
            validated = false;
        }

        return validated;
    }
    const resetErrors = ()=> {
        setTitleError('')
        setYearError('')
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        
        if( validateForm() ){
            const newMovie = {
                id: lastId + 1,
                title: movieTitle,
                year: movieYear,
            };
            addMovie(newMovie);
            setLastId(lastId + 1);
    
            resetForm();
            resetErrors();
        }
    }
    
    return (
        <form onSubmit={ onSubmit }>
            <input type="text"  placeholder='영화제목' value={ movieTitle } onChange={ e =>setMovieTitle(e.target.value) } /> <br />
            <div className='err'><span>{ titleError }</span></div>
            <input type="number"  placeholder='영화년도' value={ movieYear } onChange={ e => setMovieYear(e.target.value) }/> <br />
            <div className='err'><span>{ yearError }</span></div>
            <button type='submit'>보고싶은 영화 추가</button>
        </form> 
    );
};

export default MovieForm;