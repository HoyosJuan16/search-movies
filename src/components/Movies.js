import React from 'react'

import '../css/Movies.css'

import { Movie } from './Movie'
import { NoResults } from './NoResults'

export const Movies = ({dataMovies}) => {
  const listMovies = () => {
    return(
      dataMovies.length > 0
      ? dataMovies.map( movie => {
        return (
          <Movie 
            id={movie.imdbID}
            key={movie.imdbID}
            title={movie.Title}
            poster={movie.Poster}
            year={movie.Year}
          />
        )
      })
      : <NoResults />
    )
  }
  return (
    <div className='movies'>
      <div className='container container-movies'>
        {listMovies()}
      </div>
    </div>
  )
}