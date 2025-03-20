import './navlinks.css'
import { NavLink } from 'react-router'
import clsx from 'clsx'

export default function NavLinks(props){
    const navLinkClasses = clsx("nav-link-container", props.isNavbar && "links-in-navbar");

    return (
        <ul className={navLinkClasses}>
            <li>
              <NavLink to="/" onClick={()=>{window.scrollTo(0,0)}}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={()=>{window.scrollTo(0,0)}}>About</NavLink>
            </li>
            <li>
              <NavLink to="/events" onClick={()=>{window.scrollTo(0,0)}}>Events</NavLink>
            </li>
            {/* <li>
              <NavLink to="/" onClick={()=>{window.scrollTo(0,0)}}>Store</NavLink>
            </li> */}
            <li>
              <NavLink to="/contacts" onClick={()=>{window.scrollTo(0,0)}}>Contact</NavLink>
            </li>
            {props.addJoin && <li>
              <NavLink className="secondary-button join-button" to="/join" onClick={()=>{window.scrollTo(0,0)}}>Join</NavLink>
            </li>}
        </ul>
    )
}