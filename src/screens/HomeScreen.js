import React from "react";
import MovieSearchComponent from "../components/MovieSearchComponent";
import Background from "../elements/Background";
import { H1 } from "../elements/SearchInput";

const HomeScreen = () => {
  return (
    <Background>
      <H1>MovieBox.</H1>
      <H1>Find Your Next Movie!</H1>
      <MovieSearchComponent top={"25vh"} />
    </Background>
  );
};

export default HomeScreen;
