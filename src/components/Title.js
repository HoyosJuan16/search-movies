import React from 'react'
import '../css/Title.css'
import { Link } from 'react-router-dom'

export const Title = ({title}) => {
  return(
    <Link to='/' className='anchor-title'>
      <h1 className='title'>{title}</h1>
    </Link>
  )
}