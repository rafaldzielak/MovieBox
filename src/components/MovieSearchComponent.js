import React, { useContext, useState, useEffect } from "react";
import SearchComponent from "./SearchComponent";
import MovieContext from "../context/MovieContext";
import { useHistory, useParams } from "react-router";
import { SearchError } from "../elements/SearchInput";

const MovieSearchComponent = ({ top }) => {
  const history = useHistory();
  const { searchMoviesByTitle, error, setError } = useContext(MovieContext);

  const [textToFind, setTextToFind] = useState("");
  const { page, keyword } = useParams();

  useEffect(() => {
    if (keyword && keyword.length >= 3) {
      searchMoviesByTitle(keyword, page || 1);
      setError("");
      window.scrollTo(0, 0);
    }
  }, [keyword, page, searchMoviesByTitle, setError]);

  const searchHandler = (e) => {
    e.preventDefault();
    if (textToFind.length >= 3) history.push(`/search/${textToFind}/page/${1}`);
    else setError("Please enter at least 3 characters");
  };
  return (
    <>
      <SearchComponent
        top={top}
        submitHandler={searchHandler}
        keyword={textToFind}
        setKeyword={setTextToFind}
      />
      {error && <SearchError top={top}>{error}</SearchError>}
    </>
  );
};

export default MovieSearchComponent;
