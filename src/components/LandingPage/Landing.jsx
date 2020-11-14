import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Body = styled.div`
  background-color: black;
  height: 100%;
`;

const LogoText = styled.p`
  position: absolute;
  top: 30%;
  right: 50%;
  transform: translate(50%, -50%);
  text-transform: uppercase;
  font-family: "IBM Plex Mono", monospace;
  font-size: 12em;
  font-weight: 700;
  color: #ee171f;
  animation: glow 2.5s ease-in-out infinite alternate;
  animation-iteration-count: 6;
  text-shadow: 1px 1px 1px #eeeeee, 1px 2px 1px #eeeeee, 1px 3px 1px #eeeeee,
    1px 4px 1px #eeeeee, 1px 5px 1px #eeeeee, 1px 6px 1px #eeeeee,
    1px 7px 1px #eeeeee, 1px 8px 1px #eeeeee, 1px 9px 1px #eeeeee,
    1px 10px 1px #eeeeee, 1px 18px 6px rgba(16, 16, 16, 0.4),
    1px 22px 10px rgba(16, 16, 16, 0.2), 1px 25px 35px rgb(236, 20, 28),
    1px 30px 60px rgba(16, 16, 16, 0.4);
  @keyframes glow {
    from {
      color: #ee171f;
      text-shadow: 1px 1px 1px #eeeeee, 1px 2px 1px #eeeeee, 1px 3px 1px #eeeeee,
        1px 4px 1px #eeeeee, 1px 5px 1px #eeeeee, 1px 6px 1px #eeeeee,
        1px 7px 1px #eeeeee, 1px 8px 1px #eeeeee, 1px 9px 1px #eeeeee,
        1px 10px 1px #eeeeee, 1px 18px 6px rgba(16, 16, 16, 0.4),
        1px 22px 10px rgba(16, 16, 16, 0.2), 1px 25px 35px rgb(236, 20, 28),
        1px 30px 60px rgba(16, 16, 16, 0.4);
    }
    to {
      color: white;
      text-shadow: 1px 1px 1px #fff, 1px 2px 1px #fff, 1px 3px 1px #fff,
        1px 4px 1px #fff, 1px 5px 1px #fff, 1px 6px 1px #fff, 1px 7px 1px #fff,
        1px 8px 1px #fff, 1px 9px 1px #fff, 1px 10px 1px #fff,
        1px 18px 6px #ee171f, 1px 22px 10px #ee171f, 1px 25px 35px #ee171f,
        1px 30px 60px #ee171f;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const Landing = () => {
  return (
    <Body>
      <LogoText>
        <StyledLink to="/home">MARVEL</StyledLink>
      </LogoText>
    </Body>
  );
};

export default Landing;
