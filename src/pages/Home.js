import React, { useState } from 'react'

import '../css/Home.css'

import { Search } from '../components/Search'
import { Movies } from '../components/Movies'

export const Home = () => {

  const [dataMovies, setDataMovies] = useState([])
  const [isSearch, setisSearch] = useState(false)

  const act = (results) => {
    setDataMovies(results)
    setisSearch(true)
  }

  return (
    <div className='home'>
      <Search
        isSearch={isSearch}
        act={act}
      />
      {
        isSearch && 
        <Movies
          dataMovies={dataMovies}
         />
      }
    </div>
  )
}