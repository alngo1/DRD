import NavLinks from "../navlinks/NavLinks.jsx"
import Menu from "../menu/Menu.jsx"
import logo from "../../assets/logo.png"
import './navbar.css'
import {Link} from 'react-router'

import {useState, useEffect, useRef} from "react"

export default function Navbar(){
    const [showMenuLinks, setShowMenuLinks] = useState(false);
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

    //if clicked show sandwhich
    function handleMenu(event){
        setShowMenuLinks(prevShow => !prevShow);
        window.scrollTo(0,0)
    }

    //if screen sizes change "reset" showMenuLinks state back to false
    useEffect(() => {
        if(isMobile){
            setShowMenuLinks(false);
        }
    }, [isMobile])

    //when menu button is shown stop scroll on body and change menu btn color
    let body = document.getElementsByTagName("body")[0];
    let menuButton = useRef(null);
    if((showMenuLinks && isMobile) && menuButton.current != null){
        body.style.overflow = "hidden";
    } else if (menuButton.current != null) {
        body.style.overflow = "initial";
    }

    return(
        <nav>
            <div className="nav-content site-lr-padding content-max-width">
                <Link className="logo-link" to="/">
                    <img className="logo-img" src={logo} alt="drd's dragon logo" />
                </Link>
                <NavLinks addJoin={true}/>
                
                {isMobile && <button ref={menuButton} onClick={handleMenu} className="material-symbols-outlined navbar-menu-button">
                    menu
                </button>}
                
                {(showMenuLinks && isMobile) && <Menu handleMenu={handleMenu}/>}
            </div>
        </nav>
    )
}