import React, {useState} from 'react';
import './App.scss';
import Header from './cmpnts/Header';
import Habits from './pages/Habits';
import Home from './pages/Home'
function App() {
  const [loggedinState, setLoggedinState] = useState(false);
  const handleLogin = (bool) =>{
    setLoggedinState(bool);
  }
  const habits = [{
    _id: 1,
    title : "Test",
    desc : "Test description",
    streak : 2
  },
  {
    _id: 2,
    title : "Test no streak badge",
    desc : "Test description",
    streak : 0
  }];
  return (
    <div className="App">
      <Header 
      loggedinState = {loggedinState}
      handleLogin = {handleLogin}/>
      <main>
        {!loggedinState && <Home />}
        {loggedinState && <Habits habits={habits}/>}
      </main>
    </div>
  );
}

export default App;
