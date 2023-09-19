// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import React, { useState, useEffect } from "react"
import axios from "axios"

// Import Swiper styles
import "swiper/css"
import "swiper/css/scrollbar"

import "./styles.css"

// import required modules
import { Scrollbar } from "swiper/modules"
import { useRef } from "react"

export default function App({ getMovies, appMovie }) {
   const swiperRef = useRef(null)
   const [trailerUrls, setTrailerUrls] = useState([])

   useEffect(() => {
      const fetchTrailers = async () => {
         try {
            const trailers = await Promise.all(
               appMovie.map(async (amovie) => {
                  const response = await axios.get(
                     `https://api.themoviedb.org/3/movie/${amovie.id}/videos?api_key=${process.env.REACT_APP_SECRET_KEY}&language=ko-KR`
                  )

                  if (response.data.results.length > 0) {
                     const trailerKey = response.data.results[0].key
                     const url = `https://www.youtube.com/embed/${trailerKey}`
                     return url
                  }
               })
            )

            setTrailerUrls(trailers)
         } catch (error) {
            console.error("Error fetching trailers:", error)
         }
      }

      fetchTrailers()
   }, [appMovie])

   return (
      <>
         <h2 className='SwiperTitle'>금주의 추천작</h2>

         <Swiper
            style={{ margin: "30px 30px 150px " }}
            scrollbar={{
               hide: true,
            }}
            modules={[Scrollbar]}
            className='mySwiper'
            ref={swiperRef} // Swiper 컴포넌트에 ref 할당
         >
            {appMovie.map((amovie, index) => (
               <SwiperSlide key={amovie.id} data-index={index}>
                  {" "}
                  {/* data-index 속성 추가 */}
                  <div
                     style={{
                        display: "flex",
                        height: "800px",
                        padding: 40,
                        background: "#695f5f2a",
                        color: "#000",
                        borderTop: "1px solid #222",
                        borderBottom: "1px solid #222",
                     }}
                  >
                     <img
                        src={`https://image.tmdb.org/t/p/w500${amovie?.poster_path}`}
                        alt={amovie.title}
                        style={{ width: "50%", objectFit: "contain" }}
                     />

                     <div className='info-box' style={{ width: "40%" }}>
                        <div className='info' style={{ height: "40%" }}>
                           <h2 style={{ textAlign: "left", paddingLeft: 40 }}>
                              {amovie.title}
                           </h2>
                           <p>{amovie.overview}</p>
                        </div>
                        {trailerUrls[index] && (
                           <iframe
                              width='100%'
                              height='55%'
                              title='Trailer'
                              src={trailerUrls[index]}
                              frameBorder='0'
                              allowFullScreen
                              autoPlay={true}
                              muted={true}
                           ></iframe>
                        )}
                     </div>
                  </div>
               </SwiperSlide>
            ))}
         </Swiper>
      </>
   )
}
