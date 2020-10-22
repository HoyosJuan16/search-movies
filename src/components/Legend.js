import React from 'react'

import '../css/Legend.css'

export const Legend = ({children}) => {
  return (
    <p className='small-text'>
      {children}
    </p>
  )
}