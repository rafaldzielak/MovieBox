import styled from "styled-components";

export default styled.div`
  height: 65px;

  width: 100%;
  font-size: 2.5rem;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom: 1px solid #ccc;
  transition: 0.4s all ease-out;
  background-color: #e3e1da;
  color: ${(props) => props.theme.textColor};
  text-align: left;
  cursor: default;
`;
