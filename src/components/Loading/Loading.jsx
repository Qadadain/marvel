import React from "react";
import styled from "styled-components";

import ClipLoader from "react-spinners/ClipLoader";

const LoadingContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Loading = () => {
  return (
    <>
      <LoadingContainer>
        <ClipLoader size={100} color={"#ee171f"} />
      </LoadingContainer>
      <LoadingContainer>Loading...</LoadingContainer>
    </>
  );
};

export default Loading;
