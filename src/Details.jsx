import React from 'react'

function Details({selected, close}) {
  return (
    <div className='d-flex align-items-center justify-content-center'>
        <div className='container mt-5'>
         <div className='row'>
            <div className='col-12 col-md-6 text-center'>
                <img src={selected.Poster} alt="" />
            </div>
            <div className='col-12 col-md-6 text-white'>
              <h2>{selected.Title}</h2>
              <p><h4>Year:</h4>{selected.Year}</p>
              <p><h4>Rating:</h4>{selected.imdbRating}</p>
              <p><h4>Actors:</h4>{selected.Actors}</p>
              <p><h4>Plot:</h4> {selected.Plot}</p>
<button onClick={close} className='btn btn-danger'>Close</button>
            </div>
         </div>
        </div>
    </div>
  )
}

export default Details