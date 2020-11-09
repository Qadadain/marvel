import React, { useState, useEffect } from "react";
import Axios from "axios";
import styled from "styled-components";

import SearchBar from "../SearchBar/SearchBar";
import HeroesList from "../Heroes/HeroesList";
import Loading from "../Loading/Loading";

import { API_URL, API_KEY } from "../../constants";
import Button from "../style/Button";

import banner from "../assets/img/marvel-banner.png";

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SEARCHBAR_PLACEHOLDER = "Search from Marvel Universe...";

const Home = () => {
  const [isLoading, setLoading] = useState(false);
  const [heroesList, setHeroesList] = useState([]);
  const [filteredHeroes, setFilteredHeroes] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [nextPage, setNextpage] = useState(20);

  useEffect(() => {
    const urlWithAllHeroes = `${API_URL}?apikey=${API_KEY}`;
    const urlSearchByHeroName = `${API_URL}?nameStartsWith=${searchValue}&apikey=${API_KEY}`;
    setLoading(true);

    if (searchValue.length) {
      Axios.get(urlSearchByHeroName)
        .then((response) => response.data.data.results)
        .then((data) => {
          setFilteredHeroes(data);
          setLoading(false);
        });
    } else {
      setFilteredHeroes([]);
      Axios.get(urlWithAllHeroes)
        .then((response) => response.data.data.results)
        .then((data) => {
          setHeroesList(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [searchValue]);

  const getNextHeroesPage = () => {
    const urlOffset = `offset=${nextPage}`;
    const urlNextHeroesPage = `${API_URL}?${urlOffset}&apikey=${API_KEY}`;

    setLoading(true);

    Axios.get(urlNextHeroesPage)
      .then((response) => response.data.data.results)
      .then((data) => {
        setHeroesList(data);
        setNextpage(nextPage + 20);
        setLoading(false);
      });
  };

  const getPreviousHeroesPage = () => {
    const urlOffset = `offset=${nextPage}`;
    const urlNextHeroesPage = `${API_URL}?${urlOffset}&apikey=${API_KEY}`;
    const urlWithAllHeroes = `${API_URL}?apikey=${API_KEY}`;

    setLoading(true);
    console.log("nextPage dans getPrevious", nextPage);

    if (nextPage >= 20) {
      Axios.get(urlNextHeroesPage)
        .then((response) => response.data.data.results)
        .then((data) => {
          setHeroesList(data);
          setNextpage(nextPage - 20);
          console.log("nextPage dans nextPage >=20", nextPage);
          setLoading(false);
        });
    } else if (nextPage <= 20) {
      Axios.get(urlWithAllHeroes)
        .then((response) => response.data.data.results)
        .then((data) => {
          setHeroesList(data);
          setNextpage(20);
          setLoading(false);
        });
    }
  };

  const isBackButtonVisible = (nextPage) => {
    const offSetStart = 20;
    if (nextPage <= offSetStart) {
      return;
    } else {
      return (
        <button
          style={{ backgroundColor: "yellow" }}
          onClick={() => getPreviousHeroesPage()}
        >
          BACK
        </button>
      );
    }
  };

  console.log("nextPage avant render", nextPage);

  return (
    <>
      <BannerContainer>
        <img src={banner} alt="logo" />
      </BannerContainer>
      <SearchBar
        placeholder={SEARCHBAR_PLACEHOLDER}
        submitSearchValue={(value) => setSearchValue(value)}
      />

      {isLoading && <Loading />}

      {!isLoading && filteredHeroes.length ? (
        <HeroesList list={filteredHeroes} />
      ) : (
        !isLoading &&
        filteredHeroes.length === 0 && (
          <>
            <HeroesList list={heroesList} />
            {isBackButtonVisible(nextPage)}
            <Button onClick={() => getPreviousHeroesPage()}>BACK</Button>
            <Button onClick={() => getNextHeroesPage()}>NEXT</Button>
          </>
        )
      )}
    </>
  );
};

export default Home;
