import React from "react";
import styled from "styled-components";
import { getHeroImage } from "../../utils/hero";
import { HERO_IMAGE_FORMAT_BIG } from "../../constants";
import { Link } from "react-router-dom";

const Text = styled.div`
  color: #fff;
  text-align: center;
  line-height: 44px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
`;

const HeroContainer = styled.div`
  margin-top: 5px;
  border: 2px solid blue;
  color: white;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 33px;
  margin-right: 5px;
  margin-bottom: 10px;
  height: 400px;
  cursor: pointer;
`;

const Hero = ({ hero }) => {
  return (
    <Link to={`/hero/${hero.id}`}>
      <HeroContainer key={hero.id}>
        <Text>{hero.name}</Text>
        <img src={getHeroImage(hero, HERO_IMAGE_FORMAT_BIG)} alt="images" />
      </HeroContainer>
    </Link>
  );
};

export default Hero;
