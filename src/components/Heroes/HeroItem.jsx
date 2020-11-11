import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { getHeroImage } from "../../utils/hero";

import { HERO_IMAGE_FORMAT_BIG } from "../../constants";

import Button from "../style/Button";
import { set } from "lodash";

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
  const [heroToFav, setHeroToFav] = useState([]);

  const addHero = (hero) => {
    if (hero.id !== heroToFav.id) {
      localStorage.setItem("addToFavoritesHeroes", JSON.stringify([hero]));
      setHeroToFav([...heroToFav, hero]);
    } else {
      return;
    }
  };
  console.log("herotofav id", heroToFav);
  console.log("favoris heros", heroToFav);
  return (
    <>
      <Link to={`/hero/${hero.id}`}>
        <HeroContainer key={hero.id}>
          <Text>{hero.name}</Text>
          <img src={getHeroImage(hero, HERO_IMAGE_FORMAT_BIG)} alt="images" />
        </HeroContainer>
      </Link>
      <Button
        // onClick={() =>
        //   localStorage.setItem("addToFavoritesHeroes", JSON.stringify([hero]))
        // }
        onClick={() => addHero(hero)}
      >
        ADD TO FAVORITE
      </Button>
    </>
  );
};

export default Hero;
