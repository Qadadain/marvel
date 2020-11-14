import React, { useState } from "react";
import styled from "styled-components";
import debounce from "lodash/debounce";

const WrapperSearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputSearch = styled.input`
  background-color: white;
  outline: none;
  height: 50px;
  width: 500px;
  padding: 10px 20px;
  border: none;
  font-size: 16px;
`;

const SearchBar = ({ placeholder, submitSearchValue }) => {
  const [searchValue, setSearchValue] = useState("");
  // const [url, setUrl] = useState("");

  // const handleChangeUrl = (e) => {
  //   const inputValueToUrl = `?search=${e.target.value}`;
  //   const encodeURL = encodeURIComponent(inputValueToUrl);
  //   // setUrl(encodeURL);};
  // };

  return (
    <>
      <WrapperSearchBar>
        <InputSearch
          type="search"
          placeholder={placeholder}
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            const debouncedSubmit = debounce(
              () => submitSearchValue(e.target.value),
              1000
            );
            debouncedSubmit();
            // handleChangeUrl(e);
          }}
        />
      </WrapperSearchBar>
    </>
  );
};

export default SearchBar;
