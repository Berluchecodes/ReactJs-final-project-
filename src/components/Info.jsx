import React, { useState, useEffect } from 'react';

const Info = ({ movieInfo }) => {
  const [loading, setLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState(true);
  const [titleLoading, setTitleLoading] = useState(true);
  const [releaseDateLoading, setReleaseDateLoading] = useState(true);
  const [overviewLoading, setOverviewLoading] = useState(true);
  const [scoreLoading, setScoreLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
      setImageLoading(false);
      setTitleLoading(false);
      setReleaseDateLoading(false);
      setOverviewLoading(false);
      setScoreLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const imageUrl = `https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`;

  return (
    <div className='flex flex-col sm:flex-row justify-evenly m-1'>
      <div className='w-full sm:w-[50%] lg:w-[40%] xl:w-[35%] mb-5 sm:mb-0'>
        {loading ? (
          <div
            className='w-full h-0'
            style={{
              paddingBottom: 'calc(100% / (16/9))',
              backgroundColor: '#ccc',
            }}
          ></div>
        ) : (
          <img
            className='w-full h-auto object-cover'
            src={imageUrl}
            alt={movieInfo?.title}
            onLoad={() => setImageLoading(false)}
          />
        )}
      </div>
      <div className='w-full sm:w-[50%] lg:w-[60%] xl:w-[65%] m-5'>
        <h2 className='font-bold text-blue-400 mb-3 text-lg sm:text-2xl lg:text-3xl xl:text-4xl'>
          {titleLoading ? (
            <span className='loading-placeholder'></span>
          ) : (
            movieInfo.title
          )}
        </h2>
        <p className='mb-3 text-sm sm:text-md lg:text-lg xl:text-xl'>
          <span className='font-semibold'>Release Date: </span>{' '}
          {releaseDateLoading ? (
            <span className='loading-placeholder'></span>
          ) : (
            movieInfo.release_date
          )}
        </p>
        <p className='mb-3 text-sm sm:text-md lg:text-lg xl:text-xl'>
          <span className='font-semibold'>Overview: </span>{' '}
          {overviewLoading ? (
            <span className='loading-placeholder'></span>
          ) : (
            movieInfo.overview
          )}
        </p>
        <p className='mb-3 text-sm sm:text-md lg:text-lg xl:text-xl'>
          <span className='font-semibold'>IMDB Score: </span>{' '}
          {scoreLoading ? (
            <span className='loading-placeholder'></span>
          ) : (
            movieInfo.vote_average
          )}
        </p>
      </div>
    </div>
  );
};

export default Info;