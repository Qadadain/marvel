import React, { useState, useEffect } from "react";
import HeroDetails from "../Heroes/HeroDetails";
import { getHeroImage, isHeroDescriptionAvailable } from "../../utils/hero";
import { HERO_IMAGE_FORMAT_BIG } from "../../constants";
import { Link } from "react-router-dom";
import Button from "../style/Button";

const Favorites = () => {
  const [myFav, setMyFav] = useState([]);

  useEffect(() => {
    const myFavoritesHeroes = JSON.parse(
      localStorage.getItem("addToFavoritesHeroes")
    );
    setMyFav(myFavoritesHeroes);
  }, []);

  console.log("myfav", myFav);

  return (
    <div style={{ color: "white" }}>
      {myFav.map((hero) => (
        <div key={hero.id}>
          <h1>{hero.name}</h1>
          <p>{isHeroDescriptionAvailable(hero)}</p>
          <p>Last Modified : {hero.modified}</p>
          <img src={getHeroImage(hero, HERO_IMAGE_FORMAT_BIG)} alt="images" />
        </div>
      ))}
      <Link to="/home">
        <Button>Back</Button>
      </Link>
    </div>
  );
};

export default Favorites;
