import React, { useState, useEffect } from "react";
import Axios from "axios";
import styled from "styled-components";

import SearchBar from "../SearchBar/SearchBar";
import HeroesList from "../Heroes/HeroesList";
import Loading from "../Loading/Loading";

import { API_URL, API_KEY, SEARCHBAR_PLACEHOLDER } from "../../constants";
import Button from "../style/Button";

import banner from "../assets/img/marvel-banner.png";
import { Link } from "react-router-dom";

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

const Home = () => {
  const [isLoading, setLoading] = useState(false);
  const [heroesList, setHeroesList] = useState([]);
  const [filteredHeroes, setFilteredHeroes] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentpage] = useState(20);

  useEffect(() => {
    const urlWithAllHeroes = `${API_URL}?apikey=${API_KEY}`;
    const urlSearchByHeroName = `${API_URL}?nameStartsWith=${searchValue}&apikey=${API_KEY}`;
    const urlOffset = `offset=${currentPage}`;
    const urlCurrentPage = `${API_URL}?${urlOffset}&apikey=${API_KEY}`;

    setLoading(true);

    if (searchValue.length) {
      Axios.get(urlSearchByHeroName)
        .then((response) => response.data.data.results)
        .then((data) => {
          setFilteredHeroes(data);
        })
        .finally(() => {
          setLoading(false);
        });
    } else if (currentPage > 20) {
      if (currentPage) {
        Axios.get(urlCurrentPage)
          .then((response) => response.data.data.results)
          .then((data) => {
            setHeroesList(data);
            setCurrentpage(currentPage);
          })
          .finally(() => {
            setLoading(false);
          });
      } else if (currentPage <= 20) {
        Axios.get(urlWithAllHeroes)
          .then((response) => response.data.data.results)
          .then((data) => {
            setHeroesList(data);
            setCurrentpage(20);
          })
          .finally(() => {
            setLoading(false);
          });
      }
    } else {
      setFilteredHeroes([]);
      Axios.get(urlWithAllHeroes)
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
    }
  }, [searchValue, currentPage]);

  const onHeroSearch = !isLoading && filteredHeroes.length;
  const initialHeroList = !isLoading && filteredHeroes.length === 0;

  const isBackButtonVisible = (currentPage) => {
    const offSetStart = 20;
    if (currentPage !== offSetStart) {
      return (
        <Button onClick={() => setCurrentpage(currentPage - 20)}>BACK</Button>
      );
    }
  };

  const displayButtonNextAndBack = (
    <ButtonContainer>
      {isBackButtonVisible(currentPage)}
      <Button onClick={() => setCurrentpage(currentPage + 20)}>NEXT</Button>
    </ButtonContainer>
  );

  const linkToFavorites = <Link to="/favorites">My Favorites</Link>;

  const searchBar = (
    <SearchBar
      placeholder={SEARCHBAR_PLACEHOLDER}
      submitSearchValue={(value) => setSearchValue(value)}
    />
  );

  const bannerHeader = (
    <BannerContainer>
      <img src={banner} alt="logo" />
    </BannerContainer>
  );

  return (
    <>
      {bannerHeader}
      {searchBar}
      {displayButtonNextAndBack}
      {linkToFavorites}
      {isLoading && <Loading />}
      {onHeroSearch ? (
        <HeroesList list={filteredHeroes} />
      ) : (
        initialHeroList && (
          <>
            <HeroesList list={heroesList} />
          </>
        )
      )}
    </>
  );
};

export default Home;
