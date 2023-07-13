import { useEffect, useState } from "react";
import "./App.css";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MobileFooter from "./components/MobileFooter";
import DashBoard from "./pages/DashBoard";
import { useSelector } from "react-redux";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function App() {
  const { user } = useSelector((state) => state.user);

  return (
    <Container>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              user?.username ? <Navigate to="/dashboard" /> : <LandingPage />
            }
          />
          <Route
            path="/dashboard"
            element={user?.username ? <DashBoard /> : <Navigate to="/" />}
          />
          <Route
            path="/signup"
            element={
              user?.username ? <Navigate to="/dashboard" /> : <LandingPage />
            }
          />
          <Route
            path="/login"
            element={
              user?.username ? <Navigate to="/dashboard" /> : <LandingPage />
            }
          />
        </Routes>

        <MobileFooter />
      </Router>
    </Container>
  );
}

export default App;
