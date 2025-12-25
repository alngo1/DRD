import './navlinks.css'
import { NavLink } from 'react-router'

export default function NavLinks(props){

    return (
        <ul className="nav-link-container">
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
              <NavLink className="secondary-button join-button" to="/join" onClick={()=>{window.scrollTo(0,0)}}>
                <p className="join-button-text">
                  Join
                </p>
              </NavLink>
            </li>}
        </ul>
    )
}