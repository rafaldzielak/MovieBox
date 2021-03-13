import styled from "styled-components";
import background from "../img/background.jpg";

export default styled.div`
  background-image: url(${background});
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center bottom;

  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  @media (orientation: portrait) {
    background-size: auto 100%;
  } ;
`;
