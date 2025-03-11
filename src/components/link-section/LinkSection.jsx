import NavLinks from "../navlinks/NavLinks.jsx"
import logo from "../../assets/logo.png"
import './linksection.css'

export default function LinkSection() {
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
            </div>
        </section>
    )
}