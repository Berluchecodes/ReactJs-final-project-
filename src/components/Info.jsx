import React from 'react';

const Info = ({ movieInfo }) => {
  return (
    <div className='flex justify-evenly mb-5 '>
        <div>
        <img className=' w-[600px] xs:w-[650px] inline-block sm:w-[600px] md:w-[700px] lg:w-[750px] xl:[800px] ml-5 mt-5' src={movieInfo.backdrop_path ? `https://image.tmdb.org/t/p/w500/${movieInfo?.poster_path}` : 'URL_TO_DEFAULT_IMAGE'} alt={movieInfo?.title} />
        </div>
        <div className='m-10'>
      <h2 className='font-bold text-blue-400 mb-5 sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl '>{movieInfo.title}</h2>
      <p className='mb-5 sm:text-md md:text-lg lg:text-xl xl:text-2xl'><span className='font-semibold'>Release Date: </span> {movieInfo.release_date}</p>
      <p className='sm:text-md  mb-5 md:text-lg lg:text-xl xl:text-2xl'><span className='font-semibold '>Overview: </span> {movieInfo.overview}</p>
      <p className='sm:text-md md:text-lg lg:text-xl xl:text-2xl'><span className='font-semibold '>IMDB Score: </span> {movieInfo.vote_average}</p>
        </div>
    </div>
    
  );
};

export default Info;