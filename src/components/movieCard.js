import React from 'react'
import {useDispatch} from 'react-redux'
import {removeMovie} from '../action/movieActions'

const MovieCard = (props) => {
  const {movie} = props
  const dispatch = useDispatch()
   
  const handleRemove = (id) => {
      dispatch(removeMovie(id))
  } 
  return(
    <div class="card">
      <h3>{movie.name}</h3>
      <p>#{movie.rank}</p>
      <button style={{color:'blueviolet'}} onClick={() => {handleRemove(movie.id)}}>Remove</button>
    </div>
  )
}


export default MovieCard