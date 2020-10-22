import React from 'react'

import '../css/Search.css'

import { Title } from './Title'
import { Legend } from './Legend'
import { FormSearch } from './FormSearch'

export const Search = ({isSearch, act}) => {
  return (
    <div
      className={isSearch ? 'box-search top' : 'box-search center'}
    >

      <Title
        title='Search Movies'
        />
      <FormSearch
        onResults={act}
        />
      <Legend>Use the searcher to find a movie</Legend>
    </div>
  )
}