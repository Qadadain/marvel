import React from "react";

import styled from "styled-components";

import HeroItem from "./HeroItem";

const HeroesListContainer = styled.div`
  margin-top: 20px;
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

const HeroesList = ({
  list,
  addHeroToFavorites,
  favoritesList,
  searchValue,
}) => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {list.length === 1 && searchValue && (
          <p style={{ color: "white" }}>{list.length} Hero found</p>
        )}
        {list.length > 1 && searchValue && (
          <p style={{ color: "white" }}>{list.length} Heroes found</p>
        )}
      </div>
      <HeroesListContainer>
        {list.length === 0 && <h1 style={{ color: "white" }}>NO HERO FOUND</h1>}
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
