import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ButtonContainer = styled(Link)`
  width: 12em;
  height: 3em;
  border: none;
  border-radius: 5px;
  font-size: 1.2em;
  font-weight: 400;
  background-color: #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: black;
  cursor: pointer;
`;

const Button = ({ name, link, type }) => {
  return (
    <ButtonContainer type={type} to={link}>
      {name}
    </ButtonContainer>
  );
};

export default Button;
