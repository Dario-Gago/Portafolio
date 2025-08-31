import React from 'react'
import Header from './components/Header'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import Search from './Pages/Search'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
