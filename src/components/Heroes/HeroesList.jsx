import React from "react";

import styled from "styled-components";

import Heroes from "./Heroes";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeroesContainer = styled.div`
  margin-top: 10px;
  width: 1000px;
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
        <Heroes heroes={list} />
      </HeroesContainer>
    </Wrapper>
  );
};

export default HeroesList;
