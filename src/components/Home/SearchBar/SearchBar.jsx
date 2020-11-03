import React from "react";
import styled from "styled-components";
import SearchButton from "../../Button";

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

const SearchBar = ({ placeholder, onClickSearchBar }) => {
  return (
    <WrapperSearchBar>
      <InputSearch type="text" placeholder={placeholder} />
      <SearchButton
        onClick={() => {
          console.log("à l'interieur du composant");
          onClickSearchBar("chaine de charactere");
        }}
      >
        SEARCH
      </SearchButton>
    </WrapperSearchBar>
  );
};

export default SearchBar;
