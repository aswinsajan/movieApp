import React, { useState } from 'react'
import App from './App.css'
import axios from 'axios'


function Results({result,openDetail}) {
 



  return (
    <div  className="result" onClick={e=>openDetail(result.imdbID)}>
      <div className='border border-dark border-4'>
      <img src={result.Poster} alt="" />
      </div>
     <div className='bg-dark text-white p-2'>
     <h3>{result.Title}</h3>
     </div>
    </div>
  )
}

export default Results