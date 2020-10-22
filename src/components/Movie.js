import React from 'react'

import { Link } from 'react-router-dom'

export const Movie = ({id,title,poster,year}) => {
  return(
  <Link 
    to={`/movie/${id}`}
    className='movie'
    >
    <div className='movie-poster'>
      <img src={poster} alt={title} />
    </div>
    <h3 className='movie-title'>{title}</h3>
    <p className='movie-year'>Year: {year}</p>
  </Link>
  )
}