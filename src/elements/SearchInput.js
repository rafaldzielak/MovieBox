import styled from "styled-components";

export default styled.form`
  margin: auto;

  display: flex;
  align-items: center;
  height: 7rem;
  font-size: 2rem;
  border: none;
  border-radius: 10px;
  background-color: #ddd;
  opacity: 50%;
  border-bottom: 1px solid #ccc;
  position: relative;
  top: ${(props) => props.top};
  left: 0;
  transition: 0.4s all ease-out;
  max-width: ${(props) => props.theme.maxWidth};
  :focus {
    background-color: #555;
    color: white;
    outline: none;
    opacity: 100%;
  }
`;

export const H1 = styled.h1`
  position: relative;
  top: 15vh;
  color: #555;
  font-size: 4rem;
  margin-bottom: 1rem;
  @media (max-width: 600px) {
    font-size: 3rem;
  }
`;

export const Input = styled.input`
  min-width: 100px;
  flex: 4;
  margin: 0 1rem;
  max-width: ${(props) => props.maxWidth};
  height: 4rem;
  font-size: 2rem;
  padding: 1rem;
  border: none;
  background-color: inherit;
  border-bottom: 1px solid #333;

  transition: 0.4s all ease-out;
  :focus {
    border-radius: 10px;
    border-bottom: none;
    background-color: #111;
    color: white;
    outline: none;
    opacity: 100%;
  }
  @media (max-width: 600px) {
    flex: 2;
  }
`;

export const Button = styled.button`
  width: 100%;
  flex: 1;
  margin: 0 1rem;
  height: 4rem;
  border-radius: 10px;
  font-size: 2.25rem;
  border: none;
  background-color: #ccc;
  cursor: pointer;

  transition: 0.4s all ease-out;
  :hover {
    background-color: #555;
    color: white;
    outline: none;
    opacity: 100%;
  }
`;

export const SearchError = styled.div`
  font-size: ${(props) => (props.big ? "2.5rem" : "1.5rem")};
  position: relative;
  top: ${(props) => props.top};
  margin: ${(props) => (props.big ? "2.5rem" : "0.5rem")};
  padding: 1rem;
  /* font-size: 1.5rem; */
  border-radius: 10px;
`;
