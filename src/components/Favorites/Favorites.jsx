import React from "react";
import { getHeroImage, isHeroDescriptionAvailable } from "../../utils/hero";
import { HERO_IMAGE_FORMAT_BIG } from "../../constants";
import { Link } from "react-router-dom";
import Button from "../style/Button";
import styled from "styled-components";

const HeroesContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: white;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  align-items: center;
  width: 300px;
`;

const Favorites = () => {
  const myFavoritesHeroes = JSON.parse(
    localStorage.getItem("addToFavoritesHeroes")
  );

  return (
    <>
      <Link to="/home">
        <Button>Back</Button>
      </Link>
      <HeroesContainer>
        {myFavoritesHeroes &&
          myFavoritesHeroes.map((hero) => (
            <Wrapper key={hero.id}>
              <h1>{hero.name}</h1>
              <img
                src={getHeroImage(hero, HERO_IMAGE_FORMAT_BIG)}
                alt="images"
              />
              <p>{isHeroDescriptionAvailable(hero)}</p>
              <p>{hero.modified}</p>
            </Wrapper>
          ))}
      </HeroesContainer>
    </>
  );
};

export default Favorites;
