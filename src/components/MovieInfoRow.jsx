import axios from 'axios'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import React, { useEffect, useState } from 'react'
import Movie from './Movie'

const MoviesInfoRow = ({title, fetchURL, rowID,}) => {
const [movies, setMovies] = useState([])



useEffect(() => {
   axios.get(fetchURL).then((response) => {
    setMovies(response.data.results)
   })
},[fetchURL])

const sliderLeft = () => {
    var slider = document.getElementById('slider' + rowID)
    slider.scrollLeft = slider.scrollLeft - 500
}
const sliderRight = () => {
    var slider = document.getElementById('slider' + rowID )
    slider.scrollLeft = slider.scrollLeft + 500
}

  return (
    <div >
    <h2 className='text-blue-400 drop-shadow-2xl font-bold sm:text-lg md:text-xl lg:text-2xl xl:text-3xl p-4'>{title}  </h2>
    <div className='relative flex items-center group'>
        <MdChevronLeft
        onClick={sliderLeft}  
        className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100  cursor-pointer z-10 hidden group-hover:block' size={40} />
        <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
            {movies.map((item, id) => (
             <Movie key={id} item={item}/>
            ))}
        </div>
         <MdChevronRight 
         onClick={sliderRight}
         className='bg-white rounded-full right-0 absolute opacity-50 hover:opacity-100  cursor-pointer z-10 hidden group-hover:block' size={40} />       
    </div>
    </div>
  )
}

export default MoviesInfoRow