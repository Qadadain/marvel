import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Loading from "../Loading/Loading";

import { getHeroImage, isHeroDescriptionAvailable } from "../../utils/hero";
import { HERO_IMAGE_FORMAT_BIG, API_KEY, API_URL } from "../../constants";
import getApiUrlHeroDetails from "../../utils/getApiUrlHeroDetails";

import Button from "../style/Button";
import Banner from "../style/Banner";

import bannerImg from "../assets/img/marvel-banner.png";

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
  const [comics, setComics] = useState([]);
  const [series, setSeries] = useState([]);
  const [stories, setStories] = useState([]);

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const id = props.match.params.id;
    // const comics = "comics";
    // const stories = "stories";
    // const series = "series";
    // const apiUrl = getApiUrlHeroDetails(id);
    // // const apiUrl = getApiUrlHeroDetails(id, comics, stories, series);
    const apiUrlDefault = `${API_URL}/${id}?&apikey=${API_KEY}`;
    const apiUrlComics = `${API_URL}/${id}/comics?&apikey=${API_KEY}`;
    const apiUrlSeries = `${API_URL}/${id}/series?&apikey=${API_KEY}`;
    const apiUrlStories = `${API_URL}/${id}/stories?&apikey=${API_KEY}`;

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
    Axios.get(apiUrlComics)
      .then((response) => response.data.data.results)
      .then((data) => {
        setComics(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
    Axios.get(apiUrlSeries)
      .then((response) => response.data.data.results)
      .then((data) => {
        setSeries(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
    Axios.get(apiUrlStories)
      .then((response) => response.data.data.results)
      .then((data) => {
        setStories(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [props.match.params.id]);

  console.log("series", series);
  console.log("stories", stories);
  console.log("comics", comics);

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
                <p>{isHeroDescriptionAvailable(hero)}</p>
                <p>{hero.modified}</p>
              </HeroItemDetails>
            </HeroDetailsContainer>

            <Link to="/home">
              <Button>BACK</Button>
            </Link>
          </Wrapper>
          {series.map((serie) => (
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              <p>
                {serie.comics.items.map((title) => (
                  <div style={{ color: "white" }}>{title.name}</div>
                ))}
              </p>
              <img
                src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
                alt="img"
              />
            </div>
          ))}

          {comics.map((comic) => (
            <div style={{ color: "white", display: "flex", flexWrap: "wrap" }}>
              {comic.description}
              {comic.images.map((img) => (
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <img src={`${img.path}.${img.extension}`} alt="img" />
                </div>
              ))}
              {comic.prices.map((price) => (
                <div>{price.price} $</div>
              ))}
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default HeroDetails;
