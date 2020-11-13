import styled from "styled-components";
import { Link } from "react-router-dom";

const LinkButton = styled(Link)`
  background-color: #ee171f;
  margin-right: 60px;
  color: white;
  outline: none;
  padding: 16px 20px;
  font-size: 20px;
  font-weight: 900;
  font-size: 16px;
  z-index: 5;
  border: none;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #ee171f;
    background-color: white;
    transition: 350ms all;
  }
`;

export default LinkButton;
