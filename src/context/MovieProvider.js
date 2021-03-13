import axios from "axios";
import React, { useState, useCallback } from "react";
import MovieContext from "./MovieContext";

const MovieProvider = ({ children }) => {
  const [moviesState, setMovieState] = useState({
    currentSearch: "",
    page: 1,
    moviesDetails: [],
    loading: false,
    error: "",
  });

  const setError = useCallback((error) => {
    setMovieState((prevState) => ({ ...prevState, error }));
  }, []);

  const setLoading = () => setMovieState((prevState) => ({ ...prevState, loading: true }));

  const searchMoviesByTitle = useCallback(async (title, page = 1) => {
    setLoading();
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${title}&plot=full&page=${page}`
    );
    setMovieState((prevState) => ({
      ...prevState,
      page: parseInt(page),
      currentSearch: title,
      moviesDetails: data,
      loading: false,
    }));
  }, []);

  return (
    <MovieContext.Provider value={{ ...moviesState, searchMoviesByTitle, setError }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
