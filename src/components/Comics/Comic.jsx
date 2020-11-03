import React from "react";
import styled from "styled-components";

const ComicContainer = styled.div`
  border: 2px solid blue;
  color: white;
`;

const Comic = ({ comic }) => {
  console.log("comic", comic);
  return (
    <div>
      {comic.map((comic) => (
        <ComicContainer>
          <p>{comic.title}</p>
        </ComicContainer>
      ))}
    </div>
  );
};

export default Comic;
