import styled from "styled-components";

export default styled.nav`
  height: 65px;
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom: 1px solid #ccc;
  transition: 0.4s all ease-out;
  background-color: #eee;
  color: ${(props) => props.theme.textColor};
  text-align: left;
  cursor: default;
`;

export const Title = styled.span`
  font-size: 2.5rem;
  text-decoration: none;
  color: #333;
`;
