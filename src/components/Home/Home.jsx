import React, { useState, useEffect } from "react";
import Axios from "axios";
import styled from "styled-components";

import SearchBar from "../SearchBar/SearchBar";
import HeroesList from "../Heroes/HeroesList";
import Loading from "../Loading/Loading";

import {
  SEARCHBAR_PLACEHOLDER,
  NUMBER_OF_HERO_PER_PAGE_TO_DISPLAY,
} from "../../constants";

import getApiUrl from "../../utils/getApiUrl";
import getInitialFavorites from "../../utils/getInitialFavorites";

import ClickUnavailable from "../style/ClickUnavailable";
import LinkButton from "../style/LinkButton";
import Button from "../style/Button";
import Banner from "../style/Banner";

import bannerImg from "../assets/img/marvel-banner.png";

const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

const Home = () => {
  const [isLoading, setLoading] = useState(false);
  const [heroesList, setHeroesList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [currentOffSet, setCurrentOffset] = useState(0);
  const [favorites, setFavorites] = useState(getInitialFavorites());

  useEffect(() => {
    setLoading(true);

    const apiUrl = getApiUrl(searchValue, currentOffSet);

    Axios.get(apiUrl)
      .then((response) => response.data.data.results)
      .then((data) => {
        setHeroesList(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchValue, currentOffSet]);

  useEffect(() => {
    localStorage.setItem("addToFavoritesHeroes", JSON.stringify(favorites));
  }, [favorites]);

  const handleNextClick = () =>
    setCurrentOffset(currentOffSet + NUMBER_OF_HERO_PER_PAGE_TO_DISPLAY);
  const handlePreviousClick = () =>
    setCurrentOffset(currentOffSet - NUMBER_OF_HERO_PER_PAGE_TO_DISPLAY);

  const toggleFavoriteHero = (hero) => {
    if (!favorites.some((favoriteHero) => favoriteHero.id === hero.id)) {
      setFavorites([...favorites, hero]);
    } else {
      const newFavorites = favorites.filter(
        (favorite) => favorite.id !== hero.id
      );
      setFavorites(newFavorites);
    }
  };

  const noFavoriteHero = () =>
    alert("It Seems you don't have any favorite Heroes yet!");

  return (
    <>
      <Banner>
        <img src={bannerImg} alt="logo" />
      </Banner>
      <SearchBar
        placeholder={SEARCHBAR_PLACEHOLDER}
        submitSearchValue={setSearchValue}
      />
      {favorites.length ? (
        <LinkButton to="/favorites">MY FAVORITES</LinkButton>
      ) : (
        <ClickUnavailable onClick={noFavoriteHero}>
          MY FAVORITES
        </ClickUnavailable>
      )}

      {!searchValue && (
        <Buttons>
          {currentOffSet !== 0 && (
            <Button onClick={handlePreviousClick}>BACK</Button>
          )}
          <Button onClick={handleNextClick}>NEXT</Button>
        </Buttons>
      )}

      {isLoading && <Loading />}
      {!isLoading && (
        <HeroesList
          list={heroesList}
          addHeroToFavorites={toggleFavoriteHero}
          favoritesList={favorites}
        />
      )}
    </>
  );
};

export default Home;
