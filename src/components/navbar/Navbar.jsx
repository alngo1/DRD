import NavLinks from "../navlinks/NavLinks.jsx"
import logo from "../../assets/logo.png"
import './navbar.css'
import {Link} from 'react-router'


export default function Navbar(){
    return(
        <nav>
            <div className="logo-container">
            <Link to="/">
                <img className="logo" src={logo} alt="drd's dragon logo" />
            </Link>
            </div>
            <NavLinks addJoin={true}/>
        </nav>
    )
}