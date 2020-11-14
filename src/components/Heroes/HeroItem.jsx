import React from "react";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fasFaHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as falFaHeart } from "@fortawesome/free-regular-svg-icons";

import { getHeroImage } from "../../utils/hero";
import { HERO_IMAGE_FORMAT_BIG } from "../../constants";

import LinkButton from "../style/LinkButton";
import HeroItemContainer from "../style/HeroItemContainer";

const Text = styled.div`
  color: #fff;
  text-align: center;
  margin-bottom: 15px;
  font-weight: bold;
  text-decoration: none;
  text-decoration: underline #ee171f;
`;

const LikeContainer = styled.div`
  display: flex;
  margin-left: 120px;
  position: absolute;
  margin-top: 325px;
  z-index: 5;
`;

const HeroItem = ({ hero, isFavorite, addToFavorite, removeFromFavorite }) => {
  const heroFirstName = hero.name;
  return (
    <HeroItemContainer key={hero.id}>
      <LikeContainer>
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
      </LikeContainer>
      <Text>
        <h2>{heroFirstName}</h2>
      </Text>
      <img
        src={getHeroImage(hero, HERO_IMAGE_FORMAT_BIG)}
        alt="images"
        style={{ marginBottom: "15px" }}
      />
      <LinkButton to={`/hero/${hero.id}`}>MORE</LinkButton>
    </HeroItemContainer>
  );
};

export default HeroItem;
