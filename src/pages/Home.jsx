import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AppMovie from '../components/AppMovie';
import Banner from '../components/Banner'
import styles from './Home.module.scss'

const Home = () => {
  const a = process.env.REACT_APP_SECRET_KEY
  console.log(a)
  const [isLoading, setLoading] = useState(true);
  const [appMovie, setAppMovie] = useState([]);
  const [moviesToShow, setMoviesToShow] = useState(8); 
  
  const moviesToAddOnLoadMore = 4; 

  const VideoPlayer = () => {
    const [trailerUrl, setTrailerUrl] = useState(null);
  
    useEffect(() => {
      const handleVideo = async () => {
        if (appMovie.length > 0) {
          const id = appMovie[0].id;
          try {
            const res = await axios.get(
              `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_SECRET_KEY}&language=ko-KR`
            );
            if (res.data.results.length > 0) {
              const trailerKey = res.data.results[0].key;
              const url = `https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerKey}`;
              setTrailerUrl(url);
            }
          } catch (err) {
            console.error('Error fetching trailer:', err);
          }
        }
      };
  
      handleVideo();
    }, [appMovie]);
  
    return (
      <div>
        {trailerUrl && (
          <div className={styles.videoBox}>
            <iframe
              className={styles.video}
              src={trailerUrl}
              frameborder="0"
              allowFullScreen
              autoPlay={true}
              muted={true}
            ></iframe>
          </div>
        )}
      </div>
    );
  };
  
  

  const getMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_SECRET_KEY}&language=ko-KR&region=KR`
      );
      setAppMovie(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching movies:', error);
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    setMoviesToShow((prev) => prev + moviesToAddOnLoadMore);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {isLoading ? (
        <div>
          <span className='load'>로딩 중..</span>
        </div>
      ) : (
        <div className={styles.appWrap}>
          <div style={{ width: '100%', height: 'auto' }}>
            <VideoPlayer />
          </div>
          <Banner getMovies={getMovies} appMovie={appMovie} />

          {appMovie.slice(0, moviesToShow).map((amovie) => (
            <AppMovie
              key={amovie.id}
              id={amovie.id}
              title={amovie.title}
              posterPath={amovie.poster_path}
              date={amovie.release_date}
            />
          ))}

          {moviesToShow < appMovie.length && (
            <button onClick={handleLoadMore} className={styles.loadMoreButton}>
              더보기
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
