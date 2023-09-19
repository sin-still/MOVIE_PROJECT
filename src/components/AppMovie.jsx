import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AppMovie.module.scss'


const AppMovie = ({id, title, posterPath, date}) => {
    return (
        <div className={styles.movieList}>
            <Link to={`/about/${id}`}>
                <h2 className={styles.title}>{title}</h2>
                <img className={styles.img}
                src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
                alt={title}
                />
                <div className={styles.date}>
                    {date}
                    {/* {amovie.overview} */}
                </div>
            </Link>
        </div>
    );
};

export default AppMovie;