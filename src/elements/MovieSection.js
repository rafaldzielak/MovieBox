import styled from "styled-components";

export default styled.section`
  display: grid;
  grid-template-areas:
    "poster title "
    "poster type "
    "poster year "
    "poster imdb ";
  grid-template-columns: 1fr 4fr;
  align-items: center;
  height: 225px;
  border: 1px solid #eee;
  margin-top: 1.25rem;
  justify-content: center;
  background-color: #fff;
  transition: all 0.25s ease-in;
  color: ${(props) => props.theme.textColor};
  :hover {
    background: #eee;
  }
  @media (max-width: 768px) {
    grid-template-columns: 2fr 3fr;
  }
  @media (max-width: 546px) {
    grid-template-columns: 2fr 2fr;
  }
`;

export const Img = styled.img`
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAADICAMAAAA9W+hXAAAAMFBMVEXp7vG6vsHf5Ofl6u3X3N/R1tnAxMfm6+7Eyczc4eTJzdDZ3uHi5+rU2dzP09a+wsUUxpkcAAABWElEQVR4nO3Y63KDIBBAYfESJGDz/m9brcZoW0awdZdpz/efcBJlzVhVAAAAAAAAAAAAAAAAAAAAAACgXPXQ5RiCRJS9m1ydQFZ+lTHD5VXhRJV5XJ7VTl++yTH9vJffXsO4SX3xihPKzwrep1wc2ayPe8b0xxuKZjW35ZAd7iiatY6vW0lZ9jWUXEFZdXyEh7stMCvcTG+/WSGSFb2IYToKu64SbvkwH9BtVwEDYqnademP07Vq26X+8NlUbbq0H9W7qleXctanqrVLN+tL1bNLI6vpXbRq6VLImsaEi1aNXSpZ8/By0SpjrELWc6S6aJVGVrPGRKsUspp4jGJWUpV4VlqVdFZilXSWS6sii6y/kmXrNJX2/61fXHFCoVl+3KRLvIIzkZeUp17pHr7V+bm3E1n++qz8rkcrUDU+pn2bw9vjjwQAAAAAAAAAAAAAAAAAAADwX70DqxAQLbZn9QkAAAAASUVORK5CYII=")
    no-repeat;
  grid-area: poster;
  max-width: 150px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 0.25rem;
  transition: all 0.25s;
  :hover {
    padding: 0;
  }
`;

export const H3 = styled.h3`
  grid-area: year;
`;

export const H2 = styled.h2`
  text-align: center;
  grid-area: title;
`;

export const Year = styled(H3)`
  grid-area: year;
`;

export const Type = styled(H3)`
  grid-area: type;
`;

export const A = styled.a`
  color: ${(props) => props.theme.textColor};
  text-decoration: none;
  grid-area: imdb;
`;

export const Span = styled.span`
  color: #777;
`;
