import React, { useEffect, useState } from "react"
import Axios from "axios"
import { Link } from "react-router-dom"
import styled from "styled-components"

import Loading from "../Loading/Loading"

import { getHeroImage, isHeroDescriptionAvailable } from "../../utils/hero"
import { HERO_IMAGE_FORMAT_BIG, API_KEY, API_URL, BACK } from "../../constants"

import Button from "../style/Button"
import Banner from "../style/Banner"

import bannerImg from "../assets/img/marvel-banner.png"
import Series from "./Details/Series"
import Comics from "./Details/Comics"

const HeroDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  margin-bottom: 50px;
  width: 600px;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-bottom: 50px;
  flex-direction: column;
`
const HeroItemDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
`

const HeroDetails = (props) => {
  const [hero, setHero] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const id = props.match.params.id

  useEffect(() => {
    const apiUrlDefault = `${API_URL}/${id}?&apikey=${API_KEY}`

    setLoading(true)

    Axios.get(apiUrlDefault)
      .then((response) => response.data.data.results)
      .then((data) => {
        setHero(data[0])
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [id])

  return (
    <>
      <Banner>
        <img src={bannerImg} alt="logo" />
      </Banner>
      {isLoading && <Loading />}
      {!isLoading && hero && (
        <>
          <Wrapper>
            <Link to="/home">
              <Button>{BACK}</Button>
            </Link>
            <HeroDetailsContainer>
              <HeroItemDetails key={hero.id}>
                <h1>{hero.name}</h1>
                <img
                  src={getHeroImage(hero, HERO_IMAGE_FORMAT_BIG)}
                  alt="images"
                />
                {isHeroDescriptionAvailable(hero)}
              </HeroItemDetails>
            </HeroDetailsContainer>
          </Wrapper>

          <Series id={props.match.params.id} />

          <Comics id={props.match.params.id} />
        </>
      )}
    </>
  )
}

export default HeroDetails
