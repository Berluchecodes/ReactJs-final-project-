import React from 'react'
import { Link } from 'react-router-dom'

const MovieSearchCard = ({item}) => {
    return (
        <div className='w-[140px] xs:w-[120px] sm:w-[200px] md:w-[240px] lg:w-[280px] xl:[320px] inline-block cursor-pointer ml-2 lg:ml-9 mb-10'>
            <Link to={`/movieinfo/${item.id}`}>
        <img className='w-full h-auto' src={item.poster_path ? `https://image.tmdb.org/t/p/w500/${item?.poster_path}` : 'URL_TO_DEFAULT_IMAGE'} alt={item?.title} />
        <p className='text-xl md:text-sm text-blue-400 font-bold flex justify-center items-center text-left mt-2'>{item?.title}</p>
            </Link>
        </div>
      )
}

export default MovieSearchCard