import React from "react";
import styled from "styled-components";

import HeroItem from "./HeroItem";
import Button from "../style/Button";

const HeroesContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;

const HeroesList = ({ list, addHeroToFavorites, favoritesList }) => {
  return (
    <>
      <HeroesContainer>
        {list.map((hero) => {
          const isFavorite = favoritesList.some((favorite) => {
            return favorite.id === hero.id;
          });
          return (
            <Wrapper key={hero.id}>
              <HeroItem
                hero={hero}
                isFavorite={isFavorite}
                addToFavorite={() => addHeroToFavorites(hero)}
                removeFromFavorite={() => addHeroToFavorites(hero)}
              />
            </Wrapper>
          );
        })}
      </HeroesContainer>
    </>
  );
};

export default HeroesList;
