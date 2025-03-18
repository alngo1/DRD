import './navlinks.css'
import { Link } from 'react-router'

export default function NavLinks(props){
    return (
        <ul className="nav-link-container">
            <li>
              <Link to="/" onClick={()=>{window.scrollTo(0,0)}}>Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={()=>{window.scrollTo(0,0)}}>About</Link>
            </li>
            <li>
              <Link to="/events" onClick={()=>{window.scrollTo(0,0)}}>Events</Link>
            </li>
            {/* <li>
              <Link to="/" onClick={()=>{window.scrollTo(0,0)}}>Store</Link>
            </li> */}
            <li>
              <Link to="/contacts" onClick={()=>{window.scrollTo(0,0)}}>Contact</Link>
            </li>
            {props.addJoin && <li>
              <Link className="secondary-button join-button" to="/join" onClick={()=>{window.scrollTo(0,0)}}>Join</Link>
            </li>}
        </ul>
    )
}