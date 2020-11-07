import React, { useState, useEffect } from "react";
import Axios from "axios";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";

import { API_URL, API_KEY } from "../../constants";

import SearchBar from "./SearchBar/SearchBar";
import HeroesList from "../Heroes/HeroesList";

import banner from "../assets/img/marvel-banner.png";

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Loading = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const SEARCHBAR_PLACEHOLDER = "Search from Marvel Universe...";

const Home = () => {
  const [isLoading, setLoading] = useState(false);
  const [heroesList, setHeroesList] = useState([]);
  const [filteredHeroes, setFilteredHeroes] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const urlWithAllHeroes = `${API_URL}?&apikey=${API_KEY}`;
    const urlSearchByHeroName = `${API_URL}?nameStartsWith=${searchValue}&apikey=${API_KEY}`;

    setLoading(true);

    if (searchValue.length > 0) {
      let timerAfterTyping = setTimeout(() => setLoading(null), 3000);
      Axios.get(urlSearchByHeroName)
        .then((response) => response.data.data.results)
        .then((data) => {
          setFilteredHeroes(data);
          clearTimeout(timerAfterTyping);
          setLoading(false);
        });
    } else {
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

  return (
    <>
      <BannerContainer>
        <img src={banner} alt="logo" />
      </BannerContainer>
      <SearchBarContainer>
        <SearchBar
          placeholder={SEARCHBAR_PLACEHOLDER}
          submitSearchValue={(value) => setSearchValue(value)}
        />
      </SearchBarContainer>

      {isLoading && (
        <>
          <Loading>
            <ClipLoader size={100} color={"#ee171f"} />
          </Loading>
          <Loading>Loading...</Loading>
        </>
      )}

      {!isLoading && filteredHeroes.length > 0 && (
        <HeroesList list={filteredHeroes} />
      )}

      {!isLoading && filteredHeroes.length === 0 && (
        <HeroesList list={heroesList} />
      )}
    </>
  );
};

export default Home;
