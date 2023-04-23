import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  height: 5%;
  background-color: lightgray;
  display: flex;
  gap: 15px;
`;
const Title = styled.h1`
  /* height: 5%; */
  padding: 0;
  margin: 0;
  background-color: lightgray;
  margin: auto;
`;

const Navbar = () => {
  return (
    <>
      <Nav>
        <Link href={"/chat"}>Chat</Link>
        <Link href={"/login"}>Admin</Link>
        <Title>PWA real time notifications</Title>
      </Nav>
    </>
  );
};

export default Navbar;
