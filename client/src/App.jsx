import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import Game from './components/Game';
import Settings from './components/Settings';
import Login from './components/Login';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [jwtToken, setJwtToken] = useState(null); 

  return (
    loggedIn
    ?
    <div className='main-container'>
      <div className='navbar-component-container'>
        <Navbar />
      </div>
      
      <div className='components-container'>
        <Routes>
          <Route path='/' element={
              <Home

              />
            } 
          />

          <Route path='/Profile' element={
              <Profile

              />
            } 
          />

          <Route path='/Game' element={
              <Game

              />
            } 
          />

          <Route path='/Settings' element={
              <Settings

              />
            } 
          />

        </Routes>

      </div>
    </div>
    :
    <div className='login-container'>
      <Login/>
    </div>    
  )
}

export default App;
