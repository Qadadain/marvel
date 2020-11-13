import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import HeroItem from "../Heroes/HeroItem";

import getInitialFavorites from "../../utils/getInitialFavorites";

import Button from "../style/Button";
import Banner from "../style/Banner";

import bannerImg from "../assets/img/marvel-banner.png";

const HeroesContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  color: white;
`;

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
      <Banner>
        <img src={bannerImg} alt="logo" />
      </Banner>
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
