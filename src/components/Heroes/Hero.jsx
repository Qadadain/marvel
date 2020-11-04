import React from "react";
import styled from "styled-components";
import { getHeroImage } from "../../utils/hero";
import { HERO_IMAGE_FORMAT_BIG } from "../../constants";

const TooltipText = styled.div`
  color: #fff;
  width: 200px;
  text-align: center;
  line-height: 44px;
  font-weight: bold;
  cursor: pointer;
`;
const TooltipBox = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  left: 30px;
  visibility: hidden;
  color: transparent;
  background-color: #ee171f;
  width: 150px;
  padding: 5px 5px;
  border-radius: 4px;
  transition: visibility 0.5s, color 0.5s, background-color 0.5s, width 0.5s,
    padding 0.5s ease-in-out;
  &:before {
    content: "";
    width: 0;
    height: 0;
    left: 140px;
    top: -10px;
    position: absolute;
    border: 10px solid transparent;
    transform: rotate(135deg);
    transition: border 0.3s ease-in-out;
  }
`;
const HeroContainer = styled.div`
  margin-top: 5px;
  border: 2px solid blue;
  color: white;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 33px;
  margin-right: 5px;
  margin-bottom: 10px;
  height: 400px;
  cursor: pointer;
  position: relative;
  & ${TooltipText}:hover + ${TooltipBox} {
    visibility: visible;
    color: #fff;
    background-color: #ee171f;
    width: 200px;
    padding: 8px 8px;
    &:before {
      border-color: transparent transparent #ee171f #ee171f;
    }
  }
`;

const Hero = ({ hero }) => {
  console.log("heroes", hero);
  return (
    <HeroContainer key={hero.id}>
      <TooltipText>{hero.name}</TooltipText>
      <TooltipBox>{hero.description}</TooltipBox>
      <img src={getHeroImage(hero, HERO_IMAGE_FORMAT_BIG)} alt="images" />
    </HeroContainer>
  );
};

export default Hero;
