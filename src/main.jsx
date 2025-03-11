import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router"
import Home from './pages/home/Home.jsx'
import About from './pages/about/About.jsx'
import Events from './pages/events/Events.jsx'
// import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/events" element={<Events/>}/>
    </Routes>
  </BrowserRouter>,
)
