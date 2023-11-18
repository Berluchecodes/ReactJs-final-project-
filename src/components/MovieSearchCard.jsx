import React from 'react';
import { Link } from 'react-router-dom';

const MovieSearchCard = ({ item }) => {
  

  const imageUrl = item.poster_path ? `https://image.tmdb.org/t/p/w500/${item.poster_path}` : '';

  return (
    <div className='ml-5 w-full sm:w-[140px] xs:w-[120px] md:w-[200px] lg:w-[240px] xl:w-[280px] inline-block cursor-pointer mx-2 lg:mx-0 mb-5'>
      <Link to={`/movieinfo/${item.id}`}>
        <img className='w-full h-auto   p-4' src={imageUrl} alt={item.title} />
        <p className='text-base md:text-sm text-blue-400 font-bold flex justify-center items-center mt-1 line-clamp-2'>
          {item.title}
        </p>
      </Link>
    </div>
  );
};

export default MovieSearchCard;