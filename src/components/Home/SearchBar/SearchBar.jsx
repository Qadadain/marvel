import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import ClipLoader from "react-spinners/ClipLoader";

import SearchButton from "../../Button";
import HeroesList from "../../Heroes/HeroesList";

const WrapperSearchBar = styled.div`
  display: flex;
`;

const InputSearch = styled.input`
  background-color: white;
  outline: none;
  height: 30px;
  width: 500px;
  padding: 10px 20px;
  border: none;
  font-size: 16px;
`;

const SearchBar = ({ placeholder, list }) => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredHeroes, setFilteredHeroes] = useState([]);

  // useEffect(() => {
  //   setFilteredHeroes(
  //     filteredHeroes.filter((hero) =>
  //       hero.name.toLowerCase().includes(searchValue.toLowerCase())
  //     )
  //   );
  // }, [searchValue, filteredHeroes]);

  const submitSearchValue = () => {
    return searchValue;
  };

  return (
    <>
      <WrapperSearchBar>
        <InputSearch
          type="text"
          placeholder={placeholder}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {filteredHeroes.map((hero) => (
          <HeroesList {...hero} />
        ))}
        <SearchButton onClick={submitSearchValue}>SEARCH</SearchButton>
      </WrapperSearchBar>
    </>
  );
};

export default SearchBar;
