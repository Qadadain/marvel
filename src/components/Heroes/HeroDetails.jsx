import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Loading from "../Loading/Loading";

import { getHeroImage } from "../../utils/hero";
import { API_URL, API_KEY } from "../../constants";
import { HERO_IMAGE_FORMAT_BIG } from "../../constants";

import Button from "../style/Button";

const HeroDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  margin-bottom: 50px;
`;

const HeroDetails = (props) => {
  const [heroDetails, setHeroDetails] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const id = props.match.params.id;
    const urlWithHeroId = `${API_URL}/${id}?&apikey=${API_KEY}`;

    setLoading(true);

    Axios.get(urlWithHeroId)
      .then((response) => response.data.data.results)
      .then((data) => {
        setHeroDetails(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.match.params.id]);

  const isHeroDescriptionAvailable = (hero) => {
    const heroDescription = hero.description.length > 0;
    if (heroDescription) {
      return <>{hero.description}</>;
    } else {
      return <>No description available</>;
    }
  };

  return (
    <>
      <HeroDetailsContainer>
        {isLoading && <Loading />}
        {heroDetails.map((hero) => (
          <div key={hero.id}>
            <h1>{hero.name}</h1>
            <p>{isHeroDescriptionAvailable(hero)}</p>
            <p>Last Modified : {hero.modified}</p>
            <img src={getHeroImage(hero, HERO_IMAGE_FORMAT_BIG)} alt="images" />
          </div>
        ))}
      </HeroDetailsContainer>
      <Link to="/home">
        <Button>Back</Button>
      </Link>
    </>
  );
};

export default HeroDetails;
