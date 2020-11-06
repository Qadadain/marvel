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
    setLoading(true);
    Axios.get(`${API_URL}?&apikey=${API_KEY}`)
      .then((response) => response.data.data.results)
      .then((data) => {
        setHeroesList(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const searchRequest = () => {
    setLoading(true);
    Axios.get(`${API_URL}?name=${searchValue}&apikey=${API_KEY}`)
      .then((response) => response.data.data.results)
      .then((data) => {
        setFilteredHeroes(data);
        setLoading(false);
        console.log("setHeroesList dans searchRequest", data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const searchResultsFiltered = heroesList.filter((hero) =>
  //   hero.name.toLowerCase().includes(searchValue.toLowerCase())
  // );
  // console.log("searchResultFiltered", searchResultsFiltered);
  // console.log("searchvalue dans home", searchValue);

  // const searchResultsFiltered = heroesList.filter((hero) => {
  //   console.log({
  //     search: searchValue.toLowerCase(),
  //     value: hero.name.toLowerCase(),
  //   });

  //   console.log({
  //     search: searchValue.toLowerCase(),
  //     value: hero.name.toLowerCase(),
  //     result: hero.name.toLowerCase().includes(searchValue.toLowerCase()),
  //   });

  //   return hero.name.toLowerCase().includes(searchValue.toLowerCase);
  // });

  return (
    <>
      <BannerContainer>
        <img src={banner} alt="logo" />
      </BannerContainer>
      <SearchBarContainer>
        <SearchBar
          placeholder={SEARCHBAR_PLACEHOLDER}
          submitSearchValue={(value) => setSearchValue(value)}
          searchRequest={(value) => searchRequest(value)}
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
