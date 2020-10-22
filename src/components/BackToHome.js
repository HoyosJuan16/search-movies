import React from 'react'
import { Link } from 'react-router-dom'

export const BackToHome = () => {
  return (
    <Link
      to='/'
      className='input-submit back-to-home'
    >
      Back to home
    </Link>
  )
}