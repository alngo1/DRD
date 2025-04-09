import NavLinks from "../navlinks/NavLinks.jsx"
import Menu from "../menu/Menu.jsx"
import logo from "../../assets/logo.png"
import sandwhich from "../../assets/sandwhich icon.png"
import './navbar.css'
import {Link} from 'react-router'

import {useState, useEffect} from "react"

export default function Navbar(){
    const [showMenuLinks, setShowMenuLinks] = useState(false);
    
    //if clicked show sandwhich
    function handleMenu(event){
        setShowMenuLinks(prevShow => !prevShow);
        window.scrollTo(0,0)
    }


    //when menu is shown the side effect of pausing scroll and increasing nav size to full window height
    useEffect(() => {
        window.scrollTo(0,0)
        let body = document.getElementsByTagName("body")[0];
        let nav = document.getElementsByTagName("nav")[0];
        if(showMenuLinks){
            body.style.overflow = "hidden";
            nav.style.height = "100%";
        } else {
            body.style.overflow = "initial";
            nav.style.height = "auto";
        }
    }, [showMenuLinks])

    return(
        <>
            <nav>
                <div className="logo-container">
                    <Link to="/">
                        <img className="logo" src={logo} alt="drd's dragon logo" />
                    </Link>
                </div>
                <NavLinks addJoin={true}/>
                
                {showMenuLinks && <Menu handleMenu={handleMenu}/>}

                <button onClick={handleMenu} className="navbar-menu-button">
                    <img src={sandwhich} alt="" />
                </button>
            </nav>
        </>
    )
}