import React from "react"
import styled from "styled-components"

import HeroItem from "./HeroItem"

const HeroesContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
`

const StyledHeroItem = styled(HeroItem)`
  width: 33%;
  background-color: red;
  border: 1px solid pink;
`

const HeroesList = ({ list }) => {
  return (
    <>
      <HeroesContainer>
        {list.map((hero) => (
          <StyledHeroItem key={hero.id} hero={hero} />
        ))}
      </HeroesContainer>
    </>
  )
}

export default HeroesList
