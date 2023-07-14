import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Mobile } from "../responsive";
import { useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5em;
  padding: 0em 1em;
  background: linear-gradient(0deg, #eb5656, #eb5656);
  box-shadow: 15px 5px 50px 10px #00000040 inset;
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Message = styled.h1`
  font-size: 3em;
  font-weight: 400;
  text-align: left;
  ${Mobile({ fontSize: "1.5em" })}
`;

const LogoutBtn = styled.button`
  width: 11em;
  height: 3em;
  background-color: #fc9797;
  color: black;
  border: none;
  border-radius: 5px;
  font-size: 1.2em;
  font-weight: 400;
  cursor: pointer;
`;

const Navbar = () => {
  const { pathname } = useLocation();

  const { user } = useSelector((state) => state.user);

  const HandleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <Container>
      {pathname === "/dashboard" && (
        <Details>
          <Message>Welcome, {user.username}</Message>
          <LogoutBtn onClick={() => HandleLogout()}>Logout</LogoutBtn>
        </Details>
      )}
    </Container>
  );
};

export default Navbar;
