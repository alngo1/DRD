import NavLinks from "../navlinks/NavLinks.jsx"
import logo from "../../assets/logo.png"
import './linksection.css'

import icons from "../../assets/social_icons/social-icons.js"

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
        <section className="link-section">
            <div className="logo-and-join-container">
                <div className="link-section-text">
                    <img src={logo} alt="" />
                    <p className="body-text-two-font link-section-team-name">Davis Racing Dragons</p>
                    <h1 className="body-text-one-font link-section-title">Dragonboat at UC Davis</h1>
                </div>
                <a className="primary-button" href="">Join</a>                
            </div>
            <div className="nav-and-socials-container">
                <NavLinks addJoin={false}/>
                <div className="icon-link-container">
                    {iconImages}
                </div>
            </div>
        </section>
    )
}