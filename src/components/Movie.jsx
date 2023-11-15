import React from "react"
import { Link } from "react-router-dom"



const Movie = ({item}) => {

  if (!item || !item.poster_path) {
    console.error("Invalid item or packdrop_path:", item);
    return null; 
  }

  const imageUrl = `https://image.tmdb.org/t/p/w500/${item?.poster_path}`
   

  return (
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
      <Link to={`/movieinfo/${item.id}`}>
    <img className='w-full h-auto block' src={imageUrl} alt={item?.title}  onError={(e) => {
            e.target.src = 'URL_TO_DEFAULT_IMAGE';
          }}/>
    <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
        <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>
    </div>
      </Link>
    </div>
  )
}

export default Movie