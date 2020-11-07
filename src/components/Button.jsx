import styled from "styled-components";

const SearchButton = styled.button`
  background-color: #ee171f;
  color: white;
  outline: none;
  padding: 10px 20px;
  font-size: 20px;
  font-weight: 900;
  font-size: 16px;
  z-index: 3;
  border: none;
  cursor: pointer;
  &:hover {
    color: #ee171f;
    background-color: white;
    transition: 350ms all;
  }
`;

export default SearchButton;
