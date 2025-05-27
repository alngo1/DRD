import './events.css'
import LinkSection from "../../components/link-section/LinkSection.jsx"
import Navbar from "../../components/navbar/Navbar.jsx"
import HeaderSection from "../../components/header-section/HeaderSection.jsx"
//import carosel and slides
import Carosel from '../../components/carosel/Carosel.jsx'
import racesSlides from "./racesSlides.js"
//import slideshow and slides
import Slideshow from "../../components/slideshow/Slideshow.jsx"
import socialSlides from "./socialsSlides.js"

import eventImg from "../../assets/events/events.jpg"
import whenImg from "../../assets/events/when.jpg"
import whereImg from "../../assets/events/where.jpg"
import howImg from "../../assets/events/how.jpg"
import raceVid from "../../assets/events/race.mp4"

import { Link } from 'react-router'

import clsx from "clsx"

export default function Events(props){

    const textQuestionClass = clsx(props.isMobile ? "body-text-one-font" : "sub-heading-font" )

    return (
        <>
            <Navbar/>
            <main>
                <article>
                    <HeaderSection
                        heading="Events"
                        headingStyle="heading-font"
                        paragraph="Davis Racing Dragons holds and participates in a variety of events throughout the year! These include our weekly practices, team socials, and dragonboat races."
                        visual={<img src={eventImg} className="" alt="Davis Racing Dragons Line Up Geared Up and Ready To Race" />}
                        // buttons={<button className="secondary-button event-button">View Full Calendar</button>}
                    />
                    <section className="practice-section section-tb-padding">
                        <div className="practice-section-text content-max-width site-lr-padding">
                            <h2 className="sub-heading-font">Practices</h2>
                            <p className="body-text-one-font">Come to practices to get fit, train for races, and paddle with the team!</p>
                        </div>
                        <div className="card-section content-max-width site-lr-padding">
                            <div className="practice-card">
                                {!props.isMobile && <img src={whenImg} className="practice-card-img" alt="Davis Racing Dragons On Boat At Practice Mogging the Camera. Their Jawline Razor Cutting Shhh" />}
                                <div className="text-button-container">
                                    <div className="practice-card-text">
                                        <h2 className={textQuestionClass}>When</h2>
                                        <div className="practice-info">
                                            <p className="body-text-two-font">Every Saturday from 9AM-12PM</p>
                                            <ul className="body-text-two-font">
                                                <li>Including travel time: 8AM - 1PM</li>
                                                <li>We often go out to eat afterwards!</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="practice-card">
                                {!props.isMobile && <img src={whereImg} className="practice-card-img" alt="Davis Racing Dragons On Land After Halloween Practice Costumes in Tow" />}
                                <div className="text-button-container">
                                    <div className="practice-card-text">
                                        <h2 className={textQuestionClass}>Where</h2>
                                        <div className="practice-info">
                                            <p className="body-text-two-font">Suisun City Marina</p>
                                            <ul className="body-text-two-font">
                                                <li>800 Kellogg St, Suisun City, CA 94585</li>
                                                <li>30 - 40 min drive from Davis</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="practice-card">
                                {!props.isMobile && <img src={howImg} className="practice-card-img" alt="A Bright Day Davis Racing Dragons On Boat" />}
                                <div className="text-button-container">
                                    <div className="practice-card-text">
                                        <h2 className={textQuestionClass}>How</h2>
                                        <div className="practice-info">
                                            <p className="body-text-two-font">Carpool and equipment provided!</p>
                                            <p className="body-text-two-font">See our FAQ page for more info on what to bring to practices!</p>
                                        </div>
                                    </div>
                                    <Link to="/about/#faq-section" className="secondary-button">What to bring</Link>
                                </div>
                            </div>
                            <div className="join-team-container">
                                <h2 className="body-text-one-font team-interest-text">No experience needed!</h2>
                                <Link onClick={() => window.scrollTo(0,0)} to="/join" className="secondary-button join-button-color">Join Us</Link>
                            </div>
                        </div>
                    </section>
                    <section className="races-section section-tb-padding">
                        <div className="races-section-text content-max-width site-lr-padding">
                            <h2 className="sub-heading-font">Races</h2>
                            <p className="body-text-one-font">We compete in both local and away races against teams from all over the world!</p>
                        </div>
                        <div className="races-media content-max-width site-lr-padding">
                            <Carosel slides={racesSlides}/>
                            <div className="see-all-videos-container">
                                <video controls autoPlay muted alt="">
                                    <source src={raceVid} />
                                </video>
                                <a href="https://www.youtube.com/@davisracingdragons7829" target="_blank" className="secondary-button">See All Videos</a>
                            </div>
                        </div>
                    </section>
                    <section className="socials-section section-tb-padding">
                        <div className="social-section-text content-max-width site-lr-padding">
                            <h2 className="sub-heading-font">Socials</h2>
                            <p className="body-text-one-font">Join the team for fun bonding time off the water!</p>
                        </div>
                        {props.isMobile ?
                                <Carosel slides={socialSlides}/>
                            :
                                <Slideshow 
                                    slides={socialSlides}
                                    slideWidth={333}
                                    sideMargins={20}
                                    windowSize={3}
                                />
                        }
                        <div className="join-team-container content-max-width site-lr-padding">
                            <h2 className="body-text-one-font team-interest-text">See more on our Instagram!</h2>
                            <a target="_blank" href="https://www.instagram.com/davis.racing.dragons/" className="secondary-button join-button-color">DRD Instagram</a>
                        </div>
                    </section>
                </article>
            </main>
            <LinkSection/>
        </>
    )
}