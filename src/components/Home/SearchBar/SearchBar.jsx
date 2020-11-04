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

const SearchBar = ({ placeholder, submitSearchValue }) => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <WrapperSearchBar>
        <InputSearch
          type="text"
          placeholder={placeholder}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <SearchButton onClick={() => submitSearchValue(searchValue)}>SEARCH</SearchButton>
      </WrapperSearchBar>
    </>
  );
};

export default SearchBar;
