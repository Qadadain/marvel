import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../style/Button";
import styled from "styled-components";
import getInitialFavorites from "../../utils/getInitialFavorites";
import HeroItem from "../Heroes/HeroItem";

const HeroesContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: white;
`;

// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   border: 1px solid red;
//   align-items: center;
//   width: 300px;
// `;

const Favorites = () => {
  const [favorites, setFavorites] = useState(getInitialFavorites());

  useEffect(() => {
    localStorage.setItem("addToFavoritesHeroes", JSON.stringify(favorites));
  }, [favorites]);

  console.log("favorite", favorites);

  const removeFromFavorite = (hero) => {
    const newFavorite = favorites.filter((favorite) => hero.id !== favorite.id);
    setFavorites(newFavorite);
  };

  const removeAllFavorite = () => {
    const newFavorite = [];
    setFavorites(newFavorite);
  };

  return (
    <>
      <Link to="/home">
        <Button>Back</Button>
      </Link>
      <Button onClick={() => removeAllFavorite()}>REMOVE FAVORITE</Button>

      <HeroesContainer>
        {favorites &&
          favorites.map((hero) => (
            <HeroItem
              hero={hero}
              isFavorite
              removeFromFavorite={() => removeFromFavorite(hero)}
            />
          ))}
      </HeroesContainer>
    </>
  );
};

export default Favorites;
