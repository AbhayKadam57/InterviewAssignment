import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { Mobile, Tablet } from "../responsive";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  gap: 5em;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 51px;
  ${Tablet({ display: "none" })}
`;

const ContentBox = styled.div`
  width: 100%;
  height: 5em;
  background-color: #fc9797;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  gap: 1em;
  ${Tablet({ alignItems: "center", justifyContent: "center" })}
`;

const Title = styled.h1`
  font-size: 4em;
  font-weight: 400;
  text-align: left;
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2em;
  ${Tablet({ flexDirection: "column" })}
`;

const LandingComponent = () => {
  return (
    <Container>
      <Top>
        <ContentBox />
        <ContentBox />
      </Top>
      <Bottom>
        <Title>Welcome</Title>
        <ButtonBox>
          <Button name={"Register"} link={"/signup"} />
          <Button name={"Login"} link={"/login"} />
        </ButtonBox>
      </Bottom>
    </Container>
  );
};

export default LandingComponent;
