import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import HeroItem from "../Heroes/HeroItem";

import getInitialFavorites from "../../utils/getInitialFavorites";

import Button from "../style/Button";
import Banner from "../style/Banner";
import Wrapper from "../style/Wrapper";

import bannerImg from "../assets/img/marvel-banner.png";

const HeroesContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: white;
`;

const Favorites = () => {
  const [favorites, setFavorites] = useState(getInitialFavorites());

  useEffect(() => {
    localStorage.setItem("addToFavoritesHeroes", JSON.stringify(favorites));
  }, [favorites]);

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
      <Wrapper>
        <Link to="/home">
          <Button>Back</Button>
        </Link>
        {favorites.length !== 0 && (
          <Button onClick={() => removeAllFavorite()}>REMOVE ALL</Button>
        )}
      </Wrapper>

      <HeroesContainer>
        {favorites &&
          favorites.map((hero) => (
            <HeroItem
              key={hero.id}
              hero={hero}
              isFavorite
              removeFromFavorite={() => removeFromFavorite(hero)}
            />
          ))}
        {favorites.length === 0 && <h1>No Favorites Heroes !</h1>}
      </HeroesContainer>
    </>
  );
};

export default Favorites;
