import React, { useState, useEffect } from "react"
import Axios from "axios"
import styled from "styled-components"

import SearchBar from "../SearchBar/SearchBar"
import HeroesList from "../Heroes/HeroesList"
import Loading from "../Loading/Loading"

import {
  SEARCHBAR_PLACEHOLDER,
  NUMBER_OF_HERO_PER_PAGE,
  ROUTE_FAVORITES,
} from "../../constants"
import Button from "../style/Button"

import banner from "../assets/img/marvel-banner.png"
import { Link } from "react-router-dom"
import getApiUrl from "../../utils/getApiUrl"

const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`

const Home = () => {
  const [isLoading, setLoading] = useState(false)
  const [heroesList, setHeroesList] = useState([])
  const [searchValue, setSearchValue] = useState("")
  const [currentOffset, setCurrentOffset] = useState(0)

  useEffect(() => {
    setLoading(true)

    const apiUrl = getApiUrl(searchValue, currentOffset)

    Axios.get(apiUrl)
      .then((response) => response.data.data.results)
      .then((data) => {
        setHeroesList(data)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [searchValue, currentOffset])

  const handleNextClick = () =>
    setCurrentOffset(currentOffset + NUMBER_OF_HERO_PER_PAGE)
  const handlePreviousClick = () =>
    setCurrentOffset(currentOffset - NUMBER_OF_HERO_PER_PAGE)

  return (
    <>
      <Banner>
        <img src={banner} alt="logo" />
      </Banner>
      <SearchBar
        placeholder={SEARCHBAR_PLACEHOLDER}
        submitSearchValue={setSearchValue}
      />
      {!searchValue && (
        <Buttons>
          {currentOffset !== 0 && (
            <Button onClick={handlePreviousClick}>BACK</Button>
          )}
          <Button onClick={handleNextClick}>NEXT</Button>
        </Buttons>
      )}
      <Link to={ROUTE_FAVORITES}>My Favorites</Link>
      {isLoading && <Loading />}
      {!isLoading && <HeroesList list={heroesList} />}
    </>
  )
}

export default Home
