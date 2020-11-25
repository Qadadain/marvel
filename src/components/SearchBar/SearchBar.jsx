import React, { useState } from "react";
import styled from "styled-components";
import debounce from "lodash/debounce";

import Wrapper from "../style/Wrapper";

const InputSearch = styled.input`
  background-color: white;
  outline: none;
  height: 50px;
  width: 500px;
  padding: 10px 20px;
  border: none;
  font-size: 16px;
`;

const SearchBar = ({ placeholder, submitSearchValue, initialValue }) => {
  const [searchValue, setSearchValue] = useState(initialValue);

  return (
    <>
      <Wrapper>
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
          }}
        />
      </Wrapper>
    </>
  );
};

export default SearchBar;
