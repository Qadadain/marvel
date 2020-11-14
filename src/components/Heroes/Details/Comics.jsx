import React, { useEffect, useState } from "react";
import Axios from "axios";
import styled from "styled-components";

import Loading from "../../Loading/Loading";

import { API_KEY, API_URL } from "../../../constants";

import Title from "../../style/Title";

const ComicsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: unset;
  flex-wrap: wrap;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  margin-bottom: 20px;
  width: 650px;
`;
const TextDescription = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const Comics = ({ id }) => {
  const [comics, setComics] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrlComics = `${API_URL}/${id}/comics?&apikey=${API_KEY}`;

    setLoading(true);

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
  }, [id]);

  return (
    <>
      <Title>COMICS</Title>
      {isLoading && <Loading />}
      {!isLoading && comics && (
        <ComicsContainer>
          {comics.map((comic, index) => (
            <Wrapper key={index}>
              <TextDescription>{comic.description}</TextDescription>
              <div
                className="test3"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  width: "100%",
                  justifyContent: "space-evenly",
                }}
              >
                {comic.images.map((img, index) => (
                  <div className="test2" key={index}>
                    <div className="test">
                      <img
                        src={`${img.path}.${img.extension}`}
                        alt="img"
                        style={{
                          width: "400px",
                          height: "500px",
                        }}
                      />
                      {comic.prices.map((price, index) => (
                        <div style={{ color: "red" }} key={index}>
                          Price : {price.price} $
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Wrapper>
          ))}
        </ComicsContainer>
      )}
    </>
  );
};

export default Comics;
