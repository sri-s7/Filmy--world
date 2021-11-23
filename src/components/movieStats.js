import React from 'react'
import {useSelector} from 'react-redux'

const MovieStats = (props) => {
  let topMovie = []
  const movie = useSelector((state) => {
    return state.movie
  })

  if (movie.length > 0){
    const top = [...movie]
    const topRank = top.sort((a,b) => parseFloat(a.rank) - parseFloat(b.rank))
    
    // console.log('top',topRank);
    topMovie.push(topRank[0].name) 
    // console.log(topMovie);
  }

  return(
    <div>
      <h2> Hey Movie Buff</h2>
      <h3> your Movies - {movie.length}</h3>
      
    </div>
  )
}

export default MovieStats