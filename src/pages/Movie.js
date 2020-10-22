import React , { useState } from 'react'
import { useParams } from 'react-router-dom'

import '../css/Movie.css'

import { BackToHome } from '../components/BackToHome'

const API_KEY = '9e7e112b'

export const Movie = () => {

  const id = useParams().id
  const [movie, setMovie] = useState({})


  const data = () => {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then(res => res.json())
        .then(newMovie => setMovie(newMovie))
  }

  return (
    <div className='movie-page'>
      <div className='container container-movie-page'>
        {data()}
        <div className='movie-page-poster'>
          <img src={movie.Poster} alt={movie.Title} />
        </div>
        <h2 className='movie-page-title'>{movie.Title}</h2>
        <p className='movie-page-genre'><b>Genre: </b>{(movie.Genre)}</p>
        <p className='movie-page-year'><b>Year: </b>{(movie.Year)}</p>
        <p className='movie-page-duration'><b>Runtime: </b>{movie.Runtime}</p>
        <p className='movie-page-actors'><b>Actors: </b>{movie.Actors}</p>
        <p className='movie-page-plot'><b>Plot: </b>{movie.Plot}</p>
        <BackToHome/>
      </div>
    </div>
  )
}