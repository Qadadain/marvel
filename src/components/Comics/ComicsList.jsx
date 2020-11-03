import React from "react";

import styled from "styled-components";

import Comic from "./Comic";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ComicsContainer = styled.div`
  border: 1px solid red;
  width: 90%;
`;

const ComicsList = ({ list }) => {
  return (
    <Wrapper>
      <ComicsContainer>
        <Comic comic={list} />
      </ComicsContainer>
    </Wrapper>
  );
};

export default ComicsList;
