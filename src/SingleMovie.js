import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './context'
import axios from 'axios'

const SingleMovie = () => {
  const { id } = useParams();
  const [ movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({show:false,msg:''})

  const fetchMovie = async (url) =>{
    const result = await axios.get(url)
    console.log(result)
    if(result.status===200){
      setMovie(result.data);
      setIsLoading(false)
    }else{
      setError({show:true,msg:'error while fetching'})
    }

  }

  useEffect(()=>{
    fetchMovie(`${API_ENDPOINT}&i=${id}`)
  },[id])

  if(isLoading){
    return(
      <div className='loading'></div>
    )
  }

  if(error.show){
    return (
      <div className='page-error'>
        <h1>{error.msg}</h1>
        <Link to='/' className='btn'>
        Back to movies
        </Link>
      </div>
    )
  }
  return (
    <section className='single-movie'>
      <img src={movie.Poster} alt={movie.Title}/>
      <div className='single-movie-info'>
        <h2>{movie.Title}</h2>
        <p>{movie.Plot}</p>
        <h4>{movie.Year}</h4>
        <Link to='/' className='btn'>
          Back to movies
        </Link>
      </div>
    </section>
  )
}

export default SingleMovie
