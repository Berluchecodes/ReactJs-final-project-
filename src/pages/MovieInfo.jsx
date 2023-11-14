import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import axios from 'axios';
import Info from '../components/Info';
import MoviesInfoRow from '../components/MovieInfoRow';
import requests from '../request';

const MovieInfo = () => {
  const [movieInfo, setMovieInfo] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        // Access the API key from the .env file
        const apiKey = import.meta.env.VITE_APP_IMDB_API_KEY;
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`);
        setMovieInfo(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieData();
  }, [id]);

  return (
    <div>
    <Info movieInfo={movieInfo} />
    <MoviesInfoRow rowID='6' title="For You" fetchURL={requests.requestTrending} />
    </div>
  );
};

export default MovieInfo;
