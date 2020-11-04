import React, { useState, useEffect } from "react";
import Axios from "axios";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";

import { API_URL, API_KEY } from "../../constants";

import SearchBar from "./SearchBar/SearchBar";
import HeroesList from "../Heroes/HeroesList";

import banner from "../assets/img/marvel-banner.png";
import HeroDetails from "../Heroes/HeroDetails";

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
  const [searchValue, setSearchValue] = useState("");
  const [filteredHeroes, setFilteredHeroes] = useState([]);

  useEffect(() => {
    setLoading(true);
    Axios.get(`${API_URL}?apikey=${API_KEY}`)
      .then((response) => response.data.data.results)
      .then((data) => {
        setHeroesList(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchValue]);

  // setFilteredHeroes(
  //   filteredHeroes.filter((hero) =>
  //     hero.name.toLowerCase().includes(searchValue.toLowerCase())
  //   )
  // );

  // const searchResults = searchValue.lenght ? searchValue.map((result) => {
  //   return <div key={result.id}>{result.name}</div>
  // })

  console.log("search value dans home", searchValue);
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

      {searchValue && searchValue.length > 0 ? (
        heroesList.map((hero_details) => {
          return (
            <HeroDetails hero_details={hero_details} value={searchValue} />
          );
        })
      ) : (
        <HeroesList list={heroesList} results={searchValue} />
      )}
    </>
  );
};

export default Home;
