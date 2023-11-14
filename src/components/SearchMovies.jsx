import React, { useState } from 'react';
import axios from 'axios';
import Movie from './Movie';
import MovieSearchCard from './MovieSearchCard';

const SearchMovies = ({ setShowBanner, setShowSections }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchTerm.trim() === '') {
      alert('Please enter a search term');
      return;
    }

    const apiKey = import.meta.env.VITE_APP_IMDB_API_KEY;
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`;

    axios.get(searchUrl)
      .then((response) => {
        setSearchResults(response.data.results);
        setShowSections(false); // Set showSearchResults to true
        setShowBanner(false); // Set showSearchResults to true
      })
      .catch((error) => {
        console.error('Error fetching search results:', error);
      });
  };

  return (
    <div>

        <form onSubmit={handleSearch} className="my-4  sm:ml-1 md:ml-2 lg:ml-9">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for movies..."
            className="border p-2 mr-2 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-400 text-white px-4 py-2 rounded cursor-pointer"
          >
            Search
          </button>
        </form>
    {searchResults.length > 0 && (<p className='text-black text-xl sm:ml-1 md:ml-2 lg:ml-9 mb-4'>Showing results for "<span className='text-blue-400 font-semibold'>{searchTerm}</span>"</p>)}
      {searchResults.map((item, id) => (
        <MovieSearchCard key={id} item={item} />
      ))}
    </div>
  );
};

export default SearchMovies;