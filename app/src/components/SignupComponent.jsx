import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { Mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { RegisterUser } from "../apicalls";
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

const SignupButton = styled.button`
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

const SignupComponent = () => {
  const { user, errorMessage } = useSelector((state) => state.user);

  const [username, SetUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const HandleSubmit = (e) => {
    e.preventDefault();

    let data = { username, email, password };

    RegisterUser(dispatch, data);
  };

  return (
    <Container>
      <Form onSubmit={(e) => HandleSubmit(e)}>
        <Input
          type="text"
          name="username"
          placeholder="Username"
          onChange={(e) => SetUsername(e.target.value)}
          value={username}
        />
        {errorMessage &&
          errorMessage.map(
            (e) => e.path === "username" && <ErrorMessage>{e.msg}</ErrorMessage>
          )}

        <Input
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        {errorMessage &&
          errorMessage.map(
            (e) => e.path === "email" && <ErrorMessage>{e.msg}</ErrorMessage>
          )}
        <Input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        {errorMessage &&
          errorMessage.map(
            (e) => e.path === "password" && <ErrorMessage>{e.msg}</ErrorMessage>
          )}
        <SignupButton type="submit">SignUp</SignupButton>
        {user && <SuccessMessage>{user}</SuccessMessage>}
        <p>
          Already Register? <Link to="/login">Login here</Link>
        </p>
      </Form>
    </Container>
  );
};

export default SignupComponent;
