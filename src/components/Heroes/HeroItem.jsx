import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { getHeroImage } from "../../utils/hero";

import { HERO_IMAGE_FORMAT_BIG } from "../../constants";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fasFaHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as falFaHeart } from "@fortawesome/free-regular-svg-icons";

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
  height: 500px;
`;

const StyleLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Hero = ({ hero, isFavorite, addToFavorite, removeFromFavorite }) => {
  return (
    <div className="test">
      <HeroContainer key={hero.id}>
        <div className="testFav">
          {isFavorite ? (
            <FontAwesomeIcon
              style={{ color: "red", fontSize: "30px", cursor: "pointer" }}
              icon={fasFaHeart}
              onClick={() => removeFromFavorite(hero)}
            />
          ) : (
            <FontAwesomeIcon
              icon={falFaHeart}
              style={{ fontSize: "30px", cursor: "pointer" }}
              onClick={() => addToFavorite(hero)}
            />
          )}
        </div>
        <Text>
          <StyleLink to={`/hero/${hero.id}`}>
            <h2>{hero.name}</h2>
          </StyleLink>
        </Text>
        <img src={getHeroImage(hero, HERO_IMAGE_FORMAT_BIG)} alt="images" />
      </HeroContainer>
    </div>
  );
};

export default Hero;
