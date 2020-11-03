import React from "react";
import styled from "styled-components";

const HeroesContainer = styled.div`
  margin-top: 5px;
  border: 2px solid blue;
  color: white;
  width: 200px;
  display: inline-flex;
  justify-content: center;
  margin-left: 33px;
  margin-right: 5px;
  margin-bottom: 10px;
  height: 400px;
  cursor: pointer;
`;

const Heroes = ({ heroes }) => {
  console.log("heroes", heroes);
  return (
    <div>
      {heroes.map((heroes) => (
        <HeroesContainer key={heroes.id}>
          <p>{heroes.name}</p>
          <div>
            <p>{heroes.description}</p>
          </div>
          {/* <img alt="images">{heroes.thumbnail.path}</img> */}
          {/* <p>{comic.stories.items.resourceURI}</p>  */}
        </HeroesContainer>
      ))}
    </div>
  );
};

export default Heroes;
