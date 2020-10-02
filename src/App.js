import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./cmpnts/Header";
import Habits from "./pages/Habits";
import Home from "./pages/Home";
import {
  performLoginRequest,
  performRegisterationRequest,
} from "./helpers/AuthHelpers";
import { fetchHabits } from "./helpers/HabitHelpers";
function App() {
  const [loggedInToken, setLoggedInToken] = useState(
    localStorage.getItem("token")
  );
  const [habits, setHabits] = useState([]);
  const getHabits = async () => {
    const fetchedHabits = await fetchHabits();
    console.log(fetchedHabits);
    setHabits(fetchedHabits);
  };
  useEffect(getHabits, []);
  const handleLogin = async (loginInfo) => {
    const logInSuccess = await performLoginRequest(loginInfo);
    if (logInSuccess) {
      localStorage.setItem("token", logInSuccess.token);
      setLoggedInToken(logInSuccess.token);
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedInToken();
  };
  const handleRegisterandLogin = async (authInfo) => {
    const registrationSuccess = await performRegisterationRequest(authInfo);
    if (registrationSuccess) {
      handleLogin(authInfo);
    }
  };

  return (
    <div className="App">
      <Header
        loggedinState={loggedInToken}
        handleLogin={handleLogin}
        handleRegisterandLogin={handleRegisterandLogin}
        handleLogout={handleLogout}
      />
      <main>
        {!loggedInToken && <Home />}
        {loggedInToken && <Habits habits={habits} />}
      </main>
    </div>
  );
}

export default App;
