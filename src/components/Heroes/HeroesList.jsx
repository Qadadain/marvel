import React from "react";

import styled from "styled-components";
import {
  MULTIPLE_HEROES_FOUND,
  NO_HERO_FOUND,
  ONE_HERO_FOUND,
} from "../../constants";

import HeroItem from "./HeroItem";

const HeroesListContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: white;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  color: white;
`;

const HeroesList = ({
  list,
  addHeroToFavorites,
  favoritesList,
  searchValue,
}) => {
  return (
    <>
      <Text>
        {list.length === 1 && searchValue && (
          <p>
            {list.length} {ONE_HERO_FOUND}
          </p>
        )}
        {list.length > 1 && searchValue && (
          <p>
            {list.length} {MULTIPLE_HEROES_FOUND}
          </p>
        )}
      </Text>
      <HeroesListContainer>
        {list.length === 0 && <h1>{NO_HERO_FOUND}</h1>}
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
      </HeroesListContainer>
    </>
  );
};

export default HeroesList;
