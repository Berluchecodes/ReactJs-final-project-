import React, { useState } from 'react';
import MovieBanner from '../components/MovieBanner';
import MoviesSection from '../components/MoviesSections';
import requests from '../request';
import SearchMovies from '../components/SearchMovies';

const Movies = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [showSections, setShowSections] = useState(true);

  return (
    <div>
      {showBanner && <MovieBanner show={showBanner} />}
      <SearchMovies setShowBanner={setShowBanner} setShowSections={setShowSections} />
      {showSections && (
        <>
          <MoviesSection rowID='1' title="Up Coming" fetchURL={requests.requestUpcoming} show={showSections} />
          <MoviesSection rowID='2' title="Popular" fetchURL={requests.requestPopular} show={showSections} />
          <MoviesSection rowID='3' title="Top Rated" fetchURL={requests.requestTopRated} show={showSections} />
          <MoviesSection rowID='4' title="Trending" fetchURL={requests.requestTrending} show={showSections} />
          <MoviesSection rowID='5' title="Now Playing" fetchURL={requests.requestTV} show={showSections} />
        </>
      )}
    </div>
  );
};

export default Movies;