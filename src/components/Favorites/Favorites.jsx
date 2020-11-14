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

const Span = styled.span`
  color: #ee171f;
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
          <Button>BACK</Button>
        </Link>
        {favorites.length !== 0 && (
          <Button onClick={() => removeAllFavorite()}>REMOVE ALL</Button>
        )}
      </Wrapper>
      <Wrapper style={{ color: "white" }}>
        {favorites.length === 1 && (
          <h3>
            You have <Span>{favorites.length}</Span> Favorite Hero !
          </h3>
        )}
        {favorites.length > 1 && (
          <h3>
            You have <Span>{favorites.length}</Span> Favorites Heroes !
          </h3>
        )}
      </Wrapper>
      <HeroesContainer>
        {favorites.length === 0 && <h1>No Favorites Heroes ! Add Some...</h1>}

        {favorites &&
          favorites.map((hero) => (
            <HeroItem
              key={hero.id}
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
