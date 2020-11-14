import styled from "styled-components";
import { Link } from "react-router-dom";

const LinkToFavorite = styled(Link)`
  background-color: #ee171f;
  color: white;
  outline: none;
  padding: 16px 20px;
  font-size: 16px;
  font-weight: 900;
  font-size: 16.5px;
  z-index: 3;
  border: none;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #ee171f;
    background-color: white;
    transition: 350ms all;
  }
`;

export default LinkToFavorite;
