import NavLinks from "../navlinks/NavLinks.jsx"
import logo from "../../assets/logo.png"
import './navbar.css'
import {Link} from 'react-router'

import {useState, useEffect} from "react"

export default function Navbar(){
    const [show, setShow] = useState(true);

    //once when app loads set the hidden state if below a certain window height
    useEffect(() => {
        function changeShow(){
            if(window.innerWidth < 780){
                setShow(false);
            }else{
                setShow(true);
            }
        }
        //on any resizes changeHidden
        window.addEventListener("resize", changeShow);
        //initial call
        changeShow();
    }, []);


    //if clicked change hidden state to false or true
    function handleMenu(event){
        if(event.target.innerHTML == "menu"){
            setShow(true);
            document.getElementsByTagName("nav")[0].style.background = "black";
            event.target.innerHTML = "close";
        }else{
            setShow(false);
            document.getElementsByTagName("nav")[0].style.background = "linear-gradient(rgba(0, 0, 0, 0.6) 25%, rgba(52, 52, 52, 0.48) 71%, rgba(102, 102, 102, 0) 100%)";
            event.target.innerHTML = "menu";
        }
    }

    return(
        <nav>
            <div className="logo-container">
                <Link to="/">
                    <img className="logo" src={logo} alt="drd's dragon logo" />
                </Link>
            </div>
            {show && <NavLinks addJoin={true} isNavbar={true}/>}
            <button onClick={handleMenu} className="navbar-menu-button">
                <span className="material-icons">menu</span>
            </button>
        </nav>
    )
}


/* When the screen is able to wrap the navlinks
set navlinks display to none
set icon display to visible
the icon will be a button when clicked displays the new nav links
styled to look like a bar in fixed position

- onclick for button
    - when clicked toggles the visibility of navLinks
    - lets have a prop is hidden and set it to false initially
    - then lets add a useEffect to keep track of screen width
        - if width is below a certain point hidden is true
        - this works because it will only run once initially and if the width ever changes
    - when the button gets clicked change the hidden variable to false
    - then rerender the screen with the link and menu button
    - if the button is clicked again hide again
- toggle nav links some how
*/ 