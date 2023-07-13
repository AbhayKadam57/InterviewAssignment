import React from "react";
import styled from "styled-components";
import { Mobile, Tablet } from "../responsive";

const Container = styled.div`
  display: none;
  align-items: center;
  justify-content: space-between;
  height: 5em;
  padding: 0em 1em;
  background: linear-gradient(0deg, #eb5656, #eb5656);
  box-shadow: 15px 5px 50px 10px #00000040 inset;
  ${Tablet({ display: "flex" })}
`;

const MobileFooter = () => {
  return <Container></Container>;
};

export default MobileFooter;
