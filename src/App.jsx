import { BrowserRouter, Routes, Route } from "react-router"
import Home from './pages/home/Home.jsx'
import About from './pages/about/About.jsx'
import Events from './pages/events/Events.jsx'
import Contact from './pages/contact/Contact.jsx'
import Join from './pages/join/Join.jsx'

import {useState, useEffect} from "react"

export default function App(){
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    // Used to store window size 
    // then to to conditionally adjust layout
    useEffect(() => {
        function changeWindowWidth(){
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener("resize", changeWindowWidth);
        return function(){
            console.log("clean up func")
            window.removeEventListener("resize", changeWindowWidth);
        }
    }, []);

    const isMobile = windowWidth <= 900;
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About isMobile={isMobile}/>}/>
                <Route path="/events" element={<Events isMobile={isMobile}/>}/>
                <Route path="/contacts" element={<Contact/>}/>
                <Route path="/join" element={<Join/>}/>
            </Routes>
        </BrowserRouter>
    )
}