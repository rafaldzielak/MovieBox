import styled from "styled-components";

export default styled.footer`
  margin: 2rem 0;
`;

export const Page = styled.span`
  border-radius: 10px;

  text-align: center;
  margin: 0 1rem;
  display: inline-block;
  cursor: pointer;
  background-color: #ddd;
  width: 6rem;
  height: 5rem;
  line-height: 5rem;
  font-size: 1.5rem;
  color: ${(props) => props.theme.textColor};
  vertical-align: middle;
  transition: all 0.25s ease-in;
  :hover {
    background-color: ${(props) => (props.next ? "#ccc" : "#ddd")};
    cursor: ${(props) => (props.next ? "pointer" : "default")};
  }
  @media (max-width: 576px) {
    width: 5rem;
    font-size: 1.25rem;
    margin: 0 0.5rem;
  }
  @media (max-width: 350px) {
    width: 4rem;
    height: 4rem;
    line-height: 4rem;
    font-size: 1.25rem;
    margin: 0 0.5rem;
  }
`;

export const CurrentPage = styled(Page)`
  width: 14rem;
  cursor: default;
  @media (max-width: 576px) {
    width: 12rem;
  }
  @media (max-width: 350px) {
    width: 10rem;
  }
`;
