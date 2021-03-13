import React, { useContext } from "react";
import MovieContext from "../context/MovieContext";
import MovieSection, { Img, H2, H3, Year, Type, A, Span } from "../elements/MovieSection";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import MovieSearchComponent from "../components/MovieSearchComponent";
import Pagination from "../components/Pagination";
import { SearchError } from "../elements/SearchInput";
import ClipLoader from "react-spinners/ClipLoader";
import Navbar, { Title } from "../elements/Navbar";
import { MdMovie } from "react-icons/md";
// import { fetchMovieByName } from "../actions/moviesAcrions.js";

const MovieScreen = () => {
  const { moviesDetails, loading, currentSearch } = useContext(MovieContext);
  const { Search: movies, Response } = moviesDetails;

  return (
    <>
      <Navbar>
        <Link to='/' style={{ textDecoration: "none" }}>
          <Title>
            <MdMovie style={{ verticalAlign: "middle" }} /> MovieBox
          </Title>
        </Link>
      </Navbar>
      <MovieSearchComponent />
      <article>
        {!loading && Response === "True" && (
          <>
            {movies.map((movie) => (
              <MovieSection key={movie.imdbID}>
                <Img src={movie.Poster} alt=''></Img>
                <H2>{movie.Title}</H2>
                <Type>
                  <Span>Type: </Span>
                  {movie.Type}
                </Type>
                <Year>
                  <Span>{movie.Year?.includes("–") ? "Years" : "Year"}: </Span> {movie.Year}
                </Year>
                <A target='_blank' href={`https://www.imdb.com/title/${movie.imdbID}/`}>
                  <H3>
                    View on IMDB <FaExternalLinkAlt />
                  </H3>
                </A>
              </MovieSection>
            ))}
            <Pagination />
          </>
        )}
        {!loading && Response !== "True" && (
          <SearchError big>No Movies For The Query: {currentSearch}</SearchError>
        )}
        {loading && <ClipLoader color={"#333"} size={150} css={"margin: 20%"} />}
      </article>
    </>
  );
};

export default MovieScreen;
