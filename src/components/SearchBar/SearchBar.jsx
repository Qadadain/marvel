import React, { useState } from "react";
import styled from "styled-components";
import debounce from "lodash/debounce";

import Button from "../style/Button";

const WrapperSearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
          onChange={(e) => {
            setSearchValue(e.target.value);
            const debouncedSubmit = debounce(
              () => submitSearchValue(e.target.value),
              1000
            );
            debouncedSubmit();
          }}
        />
        <Button
          onClick={() => {
            submitSearchValue(searchValue);
          }}
        >
          SEARCH
        </Button>
      </WrapperSearchBar>
    </>
  );
};

export default SearchBar;
