import styled from "styled-components";

const HeroItemContainer = styled.div`
  margin-top: 5px;
  width: 300px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  height: 400px;
  user-select: none;
  position: relative;
  &:before {
    position: absolute;
    content: "";
    height: 0;
    width: 0;
    border: 2px solid transparent;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
  }
  &:after {
    position: absolute;
    content: "";
    height: 0;
    width: 0;
    border: 2px solid transparent;
    top: 0;
    right: 0;
    box-sizing: border-box;
  }
  &:hover:before {
    height: 400px;
    width: 300px;
    border: 2px solid #ee171f;
    border-right: none;
    border-bottom: none;
    transition: height 0.3s linear, width 0.3s linear 0.3s;
  }
  &:hover:after {
    height: 400px;
    width: 300px;
    border: 2px solid #ee171f;
    border-left: none;
    border-top: none;
    transition: height 0.3s linear, width 0.3s linear 0.3s;
  }
`;

export default HeroItemContainer;
