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
import Banner from "../style/Banner";
import LinkToFavorite from "../style/LinkToFavorite";
import ButtonNextAndPrevious from "../style/ButtonNextAndPrevious";
import Wrapper from "../style/Wrapper";

import bannerImg from "../assets/img/marvel-banner.png";

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 5px;
  align-content: center;
  width: 300px;
`;
const ButtonFavorite = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 10px;
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
      <ButtonFavorite>
        {favorites.length ? (
          <LinkToFavorite to="/favorites">FAVORITES</LinkToFavorite>
        ) : (
          <ClickUnavailable onClick={noFavoriteHero}>
            FAVORITES
          </ClickUnavailable>
        )}
      </ButtonFavorite>
      {isLoading && <Loading />}
      {!isLoading && (
        <HeroesList
          list={heroesList}
          addHeroToFavorites={toggleFavoriteHero}
          favoritesList={favorites}
          searchValue={searchValue}
        />
      )}
      {!searchValue && (
        <Wrapper>
          <Buttons>
            {currentOffSet !== 0 && (
              <ButtonNextAndPrevious onClick={handlePreviousClick}>
                BACK
              </ButtonNextAndPrevious>
            )}
            <ButtonNextAndPrevious onClick={handleNextClick}>
              NEXT
            </ButtonNextAndPrevious>
          </Buttons>
        </Wrapper>
      )}
    </>
  );
};

export default Home;
