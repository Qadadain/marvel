import React, { useState, useEffect } from "react";
import Axios from "axios";
import styled from "styled-components";

import { API_URL, API_KEY } from "../../constants";

import SearchBar from "./SearchBar/SearchBar";
import ComicsList from "../Comics/ComicsList";

import banner from "../assets/img/marvel-banner.png";

const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  const [isLoading, setLoading] = useState(false);
  const [comicsList, setComicsList] = useState([]);

  useEffect(() => {
    Axios.get(`${API_URL}&apikey=${API_KEY}`)
      .then((response) => response.data.data.results)
      .then((data) => setComicsList(data));
  }, []);

  return (
    <div>
      <BannerContainer>
        <img src={banner} alt="logo" />
      </BannerContainer>
      <SearchBarContainer>
        <SearchBar />
      </SearchBarContainer>
      <ComicsList list={comicsList} />
    </div>
  );
};

export default Home;
