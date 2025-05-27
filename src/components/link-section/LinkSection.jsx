import NavLinks from "../navlinks/NavLinks.jsx"
import logo from "../../assets/logo.png"
import './linksection.css'

import icons from "./social-icons.js"

import { Link } from "react-router"

export default function LinkSection() {

    const iconImages = icons.map((item, index) => {
        return (
            <a key={index} target="_blank" className="icon-link" href={item.link}>
                <img src={item.img}/>
            </a>
        )
    });

    return (
        <footer className="link-section  section-tb-padding">
            <div className="footer-content content-max-width site-lr-padding">
                <div className="logo-and-join-container">
                    <div className="link-section-text">
                        <img src={logo} alt="" />
                        <p className="body-text-two-font link-section-team-name">Davis Racing Dragons</p>
                        <h3 className="body-text-one-font link-section-title">Dragonboat at UC Davis</h3>
                    </div>
                    <Link className="primary-button" to="/join">Join</Link>
                </div>
                <div className="nav-and-socials-container">
                    <NavLinks addJoin={false}/>
                    <div className="icon-link-container">
                        {iconImages}
                    </div>
                </div>
            </div>
        </footer>
    )
}