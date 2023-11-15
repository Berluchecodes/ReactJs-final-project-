import React from 'react';

const Info = ({ movieInfo }) => {


  const imageUrl = `https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`;

  return (
    <div className='flex flex-col sm:flex-row justify-evenly mb-5'>
      <div className='w-full sm:w-[50%] lg:w-[40%] xl:w-[35%] mb-5 sm:mb-0 mt-3 ml-3'>
        <img
          className='w-full h-auto object-cover '
          src={imageUrl}
          alt={movieInfo?.title}
          
          
        />
      </div>
      <div className='w-full sm:w-[50%] lg:w-[60%] xl:w-[65%] m-5'>
        <h2 className='font-bold text-blue-400 mb-3 text-lg sm:text-2xl lg:text-3xl xl:text-4xl'>
          {movieInfo.title}
        </h2>
        <p className='mb-3 text-sm sm:text-md lg:text-lg xl:text-xl'>
          <span className='font-semibold'>Release Date: </span> {movieInfo.release_date}
        </p>
        <p className='mb-3 text-sm sm:text-md lg:text-lg xl:text-xl'>
          <span className='font-semibold'>Overview: </span> {movieInfo.overview}
        </p>
        <p className='mb-3 text-sm sm:text-md lg:text-lg xl:text-xl'>
          <span className='font-semibold'>IMDB Score: </span> {movieInfo.vote_average}
        </p>
      </div>
    </div>
  );
};

export default Info;