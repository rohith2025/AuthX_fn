import { useState } from 'react'
import './App.css'
import HomePage from './components/Homepage'
import Aboutuspage from './components/Aboutuspage'
import Contactpage from './components/Contactpage'
import Services from './components/Login'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from './components/Login'
import Signup from './components/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<Aboutuspage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contactpage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App