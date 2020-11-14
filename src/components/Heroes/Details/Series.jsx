import React, { useEffect, useState } from "react";
import Axios from "axios";
import styled from "styled-components";

import Loading from "../../Loading/Loading";

import { API_KEY, API_URL } from "../../../constants";

import Title from "../../style/Title";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

const Series = ({ id }) => {
  const [series, setSeries] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrlSeries = `${API_URL}/${id}/series?&apikey=${API_KEY}`;

    setLoading(true);

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
  }, [id]);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && series && (
        <>
          <Title>SERIES</Title>
          <Wrapper>
            {series.map((serie, index) => (
              <img
                key={index}
                src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
                alt="img"
                style={{
                  width: "400px",
                  height: "500px",
                }}
              />
            ))}
          </Wrapper>
        </>
      )}
    </>
  );
};

export default Series;
