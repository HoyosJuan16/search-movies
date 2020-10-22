import React, {useState} from 'react'

import '../css/FormSearch.css'

const API_KEY = '9e7e112b'

export const FormSearch = ({onResults}) => {

  const [movie,setMovie] = useState('')
  
  const actMovie = (e) => {
    console.log(e)
    setMovie(e)
  }

  const searchMovie = () => {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${movie}`)
      .then(res => res.json())
        .then(results => {
          const { Search = [] } = results
          console.log({Search})
          onResults(Search)
        })
  }

  return (
    <form 
      action='/' 
      className='form'
      method='POST' 
      onSubmit={(e)=>{
        e.preventDefault()
        searchMovie(e)
        e.target.reset()
      }}
    >
      <input
        type='text'
        className='input-text'
        placeholder='Find a movie'
        onChange={(e)=>{
          actMovie(e.target.value)
        }}
      />
      <input
        type='submit'
        className='input-submit'
        value='Search'
        />
    </form>
  )
}