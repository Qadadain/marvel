import React from "react";

import styled from "styled-components";

import Hero from "./Hero";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid green;
`;
const HeroesContainer = styled.div`
  margin-top: 10px;
  width: 500px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

const HeroesList = ({ list }) => {
  console.log("list dans Heroeslist", list);
  return (
    <Wrapper>
      <HeroesContainer>
        {list.map((hero) => (
          <Hero key={hero.id} hero={hero} />
        ))}
      </HeroesContainer>
    </Wrapper>
  );
};

export default HeroesList;
