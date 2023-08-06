import Image from "next/image";
import React from "react";
import styled from "styled-components";

const CachingContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
`;
const Column = styled.div``;
const caching = () => {
  return (
    <CachingContainer>
      <Column>
        <h1>Cached</h1>
        <Image src={"/1.jpg"} alt="a picture of a torch" width={200} height={200} />
      </Column>
      <Column>
        <h1>Network only</h1>
        <Image src={"/2.jpg"} alt="a picture of a car" width={200} height={200} />
      </Column>
    </CachingContainer>
  );
};

export default caching;
