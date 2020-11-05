import React, { useState, useEffect } from "react";
import Axios from "axios";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";

import { API_URL, API_KEY } from "../../constants";

import SearchBar from "./SearchBar/SearchBar";
import HeroesList from "../Heroes/HeroesList";
import HeroDetails from "../Heroes/HeroDetails";

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
  const [getNextHeroList, setNextHeroList] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setLoading(true);
    Axios.get(`${API_URL}?apikey=${API_KEY}`)
      .then((response) => response.data.data.results)
      .then((data) => {
        setHeroesList(data);
        setLoading(false);
        getNextHeroList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchValue, getNextHeroList]);

  const getNextHero = () => {
    const index = heroesList.length++;
    setNextHeroList(index);
  };

  const searchHero = (hero) => {
    if (hero.name === searchValue) {
      return <HeroesList hero={hero.id} />;
    }
  };

  const handleSelectHero = (id) => {
    console.log("id", id);
    selectHeroById(id);
  };

  const selectHeroById = (id) => {
    const heroesArray = heroesList.filter((hero) => hero.id !== id);
    setFilteredHeroes(heroesArray);
  };

  // setFilteredHeroes(
  //   filteredHeroes.filter((hero) =>
  //     hero.name.toLowerCase().includes(searchValue.toLowerCase())
  //   )
  // );

  // const searchResults = searchValue.lenght ? searchValue.map((result) => {
  //   return <div key={result.id}>{result.name}</div>
  // })

  console.log("search value dans home", searchValue);

  const currentIndex =
    getNextHeroList !== null ? heroesList[getNextHeroList] : null;

  console.log("current index", currentIndex);

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
        <>
          <HeroesList
            list={heroesList}
            results={searchValue}
            handleSelectHeroById={(id) => handleSelectHero(id)}
          />
          {currentIndex}
          <button style={{ color: "white" }} onClick={() => getNextHero()}>
            NEXTTTTTTT
          </button>
        </>
      )}
    </>
  );
};

export default Home;
