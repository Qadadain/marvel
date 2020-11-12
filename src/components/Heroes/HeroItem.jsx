import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { getHeroImage } from "../../utils/hero";

import { HERO_IMAGE_FORMAT_BIG } from "../../constants";

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
  border: 1px solid green;
  width: 300px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  height: 400px;
  cursor: pointer;
`;

const StyleLink = styled(Link)`
  text-decoration: none;
`;

const Hero = ({ hero, isFavorite }) => {
  return (
    <div className="test">
      <StyleLink to={`/hero/${hero.id}`}>
        <HeroContainer key={hero.id}>
          <Text>
            <h2>{hero.name}</h2>
            <p>{isFavorite ? "favoris" : "pas favoris"}</p>
          </Text>
          <img src={getHeroImage(hero, HERO_IMAGE_FORMAT_BIG)} alt="images" />
        </HeroContainer>
      </StyleLink>
    </div>
  );
};

export default Hero;
