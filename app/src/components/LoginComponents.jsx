import React, { useState } from "react";
import styled from "styled-components";
import { Mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Loginuser } from "../apicalls";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  width: 60%;
  ${Mobile({ width: "90%", alignItems: "center" })}
`;

const Input = styled.input`
  width: 100%;
  height: 3em;
  font-size: 1.2em;
  background-color: #d9d9d9;
  font-weight: 400;
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 1em;
`;

const LoginButton = styled.button`
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

const ErrorMessage = styled.small`
  font-size: 0.9em;
  color: red;
`;

const SuccessMessage = styled.small`
  font-size: 0.9em;
  color: green;
`;

const LoginComponents = () => {
  const { user, errorMessage } = useSelector((state) => state.user);

  const [username, SetUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const HandleSubmit = (e) => {
    e.preventDefault();

    let data = { username, password };

    Loginuser(dispatch, data);
  };

  return (
    <Container>
      <Form onSubmit={(e) => HandleSubmit(e)}>
        <Input
          type="text"
          value={username}
          name="username"
          placeholder="Username"
          onChange={(e) => SetUsername(e.target.value)}
        />
        {errorMessage &&
          errorMessage?.map(
            (e) => e.path === "username" && <ErrorMessage>{e.msg}</ErrorMessage>
          )}
        <Input
          type="password"
          value={password}
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMessage &&
          errorMessage?.map(
            (e) => e.path === "password" && <ErrorMessage>{e.msg}</ErrorMessage>
          )}
        <LoginButton type="submit">Login</LoginButton>
        <p>
          Not registered yet? <Link to="/signup">Register here...</Link>
        </p>
      </Form>
    </Container>
  );
};

export default LoginComponents;
