import "./App.css";

import { ThemeProvider } from "styled-components";

import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import MovieScreen from "./screens/MovieScreen";
import Container from "./elements/Container";
import MovieProvider from "./context/MovieProvider";

const theme = {
  maxWidth: "900px",
  textColor: "#333",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <div className='App'>
          <MovieProvider>
            <Router>
              <Route exact path='/' component={HomeScreen}></Route>
              <Route exact path='/search/:keyword' component={MovieScreen}></Route>
              <Route exact path='/search/:keyword/page/:page' component={MovieScreen}></Route>
            </Router>
          </MovieProvider>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
