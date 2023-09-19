import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from './About.module.scss';
import axios from "axios";

const About = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null); // 변경된 상태 변수 이름

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.SECRET_KEY}&language=ko-KR`)
      .then((res) => {
        setMovie(res.data); // 변경된 상태 변수에 데이터 설정
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching movie data:", error);
        setLoading(false);
      });
  }, [id]); // id가 변경될 때마다 다시 요청

  const movieDetail = loading ? (
    <div className={styles.loading}>로딩중...</div>
  ) : (
    <div className={styles.aboutWrap}>
      <div className={styles.user}>
        <img
          className={styles.img}
          style={{  }}
          src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
          alt="Movie Poster" // 이미지의 대체 텍스트 지정
        />
        <div className={styles.box}>
          {/* 변경된 영화 정보 접근 */}
          <div className={`${styles.movieStyle} ${styles.movieTitle}`}>
            {movie?.title}
          </div>
          <div className={`${styles.movieStyle} ${styles.movieOverview}`}>
            {movie?.overview}
          </div>
          <div className={`${styles.movieStyle} ${styles.movieReleaseDate}`}>
            {movie?.release_date}
          </div>
          <div className={`${styles.movieStyle} ${styles.movieVoteAverage}`}>
            ⭐ {movie?.vote_average}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <h2 className={styles.h2}>Movie Info</h2>
      {movieDetail}
    </div>
  );
};

export default About;