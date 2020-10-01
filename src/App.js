import React, {useState} from 'react';
import './App.scss';
import Header from './cmpnts/Header';
import Habits from './pages/Habits';
import Home from './pages/Home'
import {performLoginRequest,performRegisterationRequest} from './helpers/AuthHelpers';
function App() {
  const [loggedInToken, setLoggedInToken] = useState(localStorage.getItem('token'));
  const handleLogin = async (loginInfo) =>{
    const logInSuccess = await performLoginRequest(loginInfo);
    if(logInSuccess){
      localStorage.setItem('token',logInSuccess.token);
      setLoggedInToken(logInSuccess.token);
    }
  };
  const handleLogout = () =>{
    localStorage.removeItem('token');
    setLoggedInToken();
  }
  const handleRegisterandLogin = async (authInfo) =>{
    const registrationSuccess = await performRegisterationRequest(authInfo);
    if(registrationSuccess){
      handleLogin(authInfo);
    }
  }
  const habits = [{
    _id: 1,
    title : "Test",
    desc : "Test description",
    streak : 2,
    frequency : "daily"
  },
  {
    _id: 2,
    title : "Test no streak badge",
    desc : "Test description",
    streak : 0,
    frequency : "monthly"
  }];
  return (
    <div className="App">
      <Header 
      loggedinState = {loggedInToken}
      handleLogin = {handleLogin}
      handleRegisterandLogin = {handleRegisterandLogin}
      handleLogout = {handleLogout}/>
      <main>
        {!loggedInToken && <Home />}
        {loggedInToken && <Habits habits={habits}/>}
      </main>
    </div>
  );
}

export default App;
