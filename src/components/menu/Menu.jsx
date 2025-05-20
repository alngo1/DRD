import { NavLink } from 'react-router'

import "./menu.css"


export default function Menu(props) {
    return(
        <>
            <ul className="menu-links">
                <li>
                    <NavLink to="/" className="sub-heading-font" onClick={props.handleMenu}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="sub-heading-font" onClick={props.handleMenu}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/events" className="sub-heading-font" onClick={props.handleMenu}>Events</NavLink>
                </li>
                {/* <li>
                <NavLink to="/" onClick={()=>{window.scrollTo(0,0)}}>Store</NavLink>
                </li> */}
                <li>
                    <NavLink to="/contacts" className="sub-heading-font" onClick={props.handleMenu}>Contact</NavLink>
                </li>
                <li>
                    <NavLink className="primary-button sub-heading-font" to="/join" onClick={props.handleMenu}>Join</NavLink>
                </li>
            </ul>
        </>
    )
}