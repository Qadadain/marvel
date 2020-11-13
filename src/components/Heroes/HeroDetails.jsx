import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Loading from "../Loading/Loading";

import { getHeroImage, isHeroDescriptionAvailable } from "../../utils/hero";
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
  const [hero, setHero] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const id = props.match.params.id;
    const urlWithHeroId = `${API_URL}/${id}?&apikey=${API_KEY}`;

    setLoading(true);

    Axios.get(urlWithHeroId)
      .then((response) => response.data.data.results)
      .then((data) => {
        setHero(data[0]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [props.match.params.id]);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && hero && (
        <>
          <HeroDetailsContainer>
            <div key={hero.id}>
              <h1>{hero.name}</h1>
              <p>{isHeroDescriptionAvailable(hero)}</p>
              <p>{hero.modified}</p>
              <img
                src={getHeroImage(hero, HERO_IMAGE_FORMAT_BIG)}
                alt="images"
              />
            </div>
          </HeroDetailsContainer>
          <Link to="/home">
            <Button>BACK</Button>
          </Link>
        </>
      )}
    </>
  );
};

export default HeroDetails;
