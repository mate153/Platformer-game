import './App.css'
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Main from './components/Main'
import Profile from './components/Profile'
import Game from './components/Game'
import Settings from './components/Settings'

function App() {


  return (    
    <div className='main-container'>
      <div className='navbar-component-container'>
        <Navbar />
      </div>
      
      <div className='components-container'>
        <Routes>
          <Route path='/' element={
              <Main

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

    
  )
}

export default App
