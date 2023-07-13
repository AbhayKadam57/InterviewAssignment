import React from "react";
import styled from "styled-components";
import LandingComponent from "../components/LandingComponent";
import { Mobile, Tablet } from "../responsive";
import { useLocation } from "react-router-dom";
import SignupComponent from "../components/SignupComponent";
import LoginComponents from "../components/LoginComponents";

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 3em;
  gap: 5.5em;
  ${Tablet({ flexDirection: "column" })}
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100%;
  background-color: blue;
`;

const Box = styled.div`
  min-width: 100%;
  max-height: clamp(2vh, 100em, 75vh);
  aspect-ratio: 3/4;
  background-color: #fc9797;
  display: ${(props) =>
    props.pathname === "/" ||
    props.pathname === "/signup" ||
    props.pathname === "/login"
      ? "flex"
      : "none"};

  @media screen and (max-width: 456px) {
    display: ${(props) =>
      props.pathname === "/" ||
      props.pathname === "/signup" ||
      props.pathname === "/login"
        ? "flex"
        : "none"};
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const LandingPage = () => {
  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <Container>
      <Left>
        <Box pathname={pathname} />
      </Left>
      <Right>
        {pathname === "/" && <LandingComponent />}
        {pathname === "/signup" && <SignupComponent />}
        {pathname === "/login" && <LoginComponents />}
      </Right>
    </Container>
  );
};

export default LandingPage;
