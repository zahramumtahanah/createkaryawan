import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register'
import Login from './components/Login'
import Create from './components/Create';
import Finish from './components/Finish';


const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={
            <main>
              <Register />
            </main>
          }/>
          <Route path="/login" element={<Login/>} />
          <Route path="/create" element={<Create/>} />
          <Route path="/finish" element={<Finish/>} />
        </Routes>
    </Router>
  )
}

export default App