import React from "react";
import styled from "styled-components";

import HeroItem from "./HeroItem";

const HeroesContainer = styled.div`
  margin-top: 10px;
  display: flex;
`;

const HeroesList = ({ list }) => {
  return (
    <>
      <HeroesContainer>
        {list.map((hero) => (
          <HeroItem key={hero.id} hero={hero} />
        ))}
      </HeroesContainer>
    </>
  );
};

export default HeroesList;
