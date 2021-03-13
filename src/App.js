import "./App.css";

import { ThemeProvider } from "styled-components";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import Navbar, { Title } from "./elements/Navbar";
import { MdMovie } from "react-icons/md";

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
              <Navbar>
                <Link to='/' style={{ textDecoration: "none" }}>
                  <Title>
                    <MdMovie style={{ verticalAlign: "middle" }} /> MovieBox
                  </Title>
                </Link>
              </Navbar>
              <Route exact path='/' component={HomeScreen}></Route>
            </Router>
          </MovieProvider>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
