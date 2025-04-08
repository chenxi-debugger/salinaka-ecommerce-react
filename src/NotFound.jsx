import React from 'react'
import './notFound.css'

export default function NotFound() {
  return (
    <div className='not-found'>
      <h1 className='not-found-text'>:( Page you are looking for doesn't exists.</h1>
      <button className='btn-primary'
        onClick={() => {
          window.location.href = '/';
        }}
        >Go Back</button>
    </div>
  )
}
