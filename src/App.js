import React, {useState} from 'react';
import './App.scss';
import Header from './cmpnts/Header'
import Habits from './pages/Habits'
function App() {
  const [loggedinState, setLoggedinState] = useState(false);
  const handleLogin = (bool) =>{
    setLoggedinState(bool);
  }
  const habits = [{
    title : "Test",
    desc : "Test description",
    streak : 2
  },
  {
    title : "Test no streak badge",
    desc : "Test description",
    streak : 0
  }]
  return (
    <div className="App">
      <Header 
      loggedinState = {loggedinState}
      handleLogin = {handleLogin}/>
      <main>
        {!loggedinState && <h2>Hi</h2>}
        {loggedinState && <Habits habits={habits}/>}
      </main>
    </div>
  );
}

export default App;
