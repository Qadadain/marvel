import React, { useEffect, useState } from "react";
import Axios from "axios";

import { getHeroImage } from "../../utils/hero";

import { API_URL, API_KEY } from "../../constants";
import { HERO_IMAGE_FORMAT_BIG } from "../../constants";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

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
    <div className="test" style={{ color: "white" }}>
      {isLoading && <Loading />}
      {heroDetails.map((hero) => (
        <div key={hero.id}>
          <p>Name : {hero.name}</p>
          <p>Description : {isHeroDescriptionAvailable(hero)}</p>
          <p>Last Modified : {hero.modified}</p>
          <img src={getHeroImage(hero, HERO_IMAGE_FORMAT_BIG)} alt="images" />
        </div>
      ))}
      <Link to="/home">Back</Link>
    </div>
  );
};

export default HeroDetails;
