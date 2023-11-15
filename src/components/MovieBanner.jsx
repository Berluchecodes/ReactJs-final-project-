import React, { useEffect, useState } from 'react'
import requests from '../request'
import axios from 'axios'

const MovieBanner = ({show}) => {
const [movies, setMovies] = useState([])
const movie = movies[Math.floor(Math.random()* movies.length)]

useEffect (() => {
axios.get(requests.requestPopular).then((response)=> {
  setMovies(response.data.results)
})
},[])

console.log(movie)

const truncateString = (str, num) => {
  if (str?.length > num) {
      return str.slice(0, num) + '...'
  } else {
      return str
  }
}

  return (
    <div className={`w-full h-[550px] text-black ${show ? '' : 'hidden'}`}>
        <div className='w-full h-[450px]'>
          <div className='absolute w-full h-[450px] bg-gradient-to-r from-blue-400'/>
          <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} alt={movie?.title} />
          <div className='absolute w-full top-[20%] p-4 md:p-8'>
                <h1 className='text-3xl mr-2 md:text-5xl'>{movie?.title}</h1>
            <p className='text-gray-800 mb-3 mt-3 text-sm '>Released: {movie?.release_date}</p>
            <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-black font-semibold'>{truncateString(movie?.overview, 200)}</p>
            </div>
        </div>
    </div>
  )

  
}

export default MovieBanner