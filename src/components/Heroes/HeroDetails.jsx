import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Loading from "../Loading/Loading";

import { getHeroImage, isHeroDescriptionAvailable } from "../../utils/hero";
import { HERO_IMAGE_FORMAT_BIG, API_KEY, API_URL } from "../../constants";

import Button from "../style/Button";
import Banner from "../style/Banner";

import bannerImg from "../assets/img/marvel-banner.png";
import Series from "./Details/Series";
import Comics from "./Details/Comics";

const HeroDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  margin-bottom: 50px;
  border: 1px solid green;
  width: 600px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-bottom: 50px;
  border: 1px solid purple;
  flex-direction: column;
`;
const HeroItemDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
`;

const HeroDetails = (props) => {
  const [hero, setHero] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const id = props.match.params.id;
    const apiUrlDefault = `${API_URL}/${id}?&apikey=${API_KEY}`;
    // const apiUrlStories = `${API_URL}/${id}/stories?&apikey=${API_KEY}`;

    setLoading(true);

    Axios.get(apiUrlDefault)
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
    // Axios.get(apiUrlStories)
    //   .then((response) => response.data.data.results)
    //   .then((data) => {
    //     setStories(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
  }, [props.match.params.id]);

  return (
    <>
      <Banner>
        <img src={bannerImg} alt="logo" />
      </Banner>
      {isLoading && <Loading />}
      {!isLoading && hero && (
        <>
          <Wrapper>
            <HeroDetailsContainer>
              <HeroItemDetails key={hero.id}>
                <h1>{hero.name}</h1>
                <img
                  src={getHeroImage(hero, HERO_IMAGE_FORMAT_BIG)}
                  alt="images"
                />
                {isHeroDescriptionAvailable(hero)}
                {hero.modified}
              </HeroItemDetails>
            </HeroDetailsContainer>

            <Link to="/home">
              <Button>BACK</Button>
            </Link>
          </Wrapper>
          <h1 style={{ color: "red" }}>SERIES</h1>
          <Series id={props.match.params.id} />
          <h1 style={{ color: "red" }}>COMICS</h1>
          <Comics id={props.match.params.id} />
        </>
      )}
    </>
  );
};

export default HeroDetails;
