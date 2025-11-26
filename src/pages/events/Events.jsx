import './events.css'
import assets from "../../assets.json"

//import components
import LinkSection from "../../components/link-section/LinkSection.jsx"
import Navbar from "../../components/navbar/Navbar.jsx"
import HeaderSection from "../../components/header-section/HeaderSection.jsx"
import Carosel from '../../components/carosel/Carosel.jsx'
import Slideshow from "../../components/slideshow/Slideshow.jsx"

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
                        visual={<img src={assets["Events"]["Header"].img} className="" alt={assets["Events"]["Header"].alt} />}
                        // buttons={<button className="secondary-button event-button">View Full Calendar</button>}
                    />
                    <section className="practice-section section-tb-padding">
                        <div className="practice-section-text content-max-width site-lr-padding">
                            <h2 className="sub-heading-font">Practices</h2>
                            <p className="body-text-one-font">Come to practices to get fit, train for races, and paddle with the team!</p>
                        </div>
                        <div className="card-section content-max-width site-lr-padding">
                            <div className="practice-card">
                                {!props.isMobile && <img src={assets["Events"]["When"]["img"]} className="practice-card-img" alt={assets["Events"]["When"]["alt"]} />}
                                <div className="text-button-container">
                                    <div className="practice-card-text">
                                        <h2 className={textQuestionClass}>When</h2>
                                        <div className="practice-info">
                                            <p className="body-text-two-font">Every Saturday from 9AM-12PM</p>
                                            <ul className="body-text-two-font">
                                                <li>Including travel time: 12am-12am</li>
                                                <li>We often go out to eat afterwards!</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="practice-card">
                                {!props.isMobile && <img src={assets["Events"]["Where"]["img"]} className="practice-card-img" alt={assets["Events"]["Where"]["alt"]} />}
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
                                {!props.isMobile && <img src={assets["Events"]["How"]["img"]} className="practice-card-img" alt={assets["Events"]["How"]["alt"]} />}
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
                            <Carosel slides={assets["Events"]["Race Slides"]}/>
                            <div className="see-all-videos-container">
                                <video controls autoPlay muted alt="">
                                    <source src={assets["Events"]["Race Video"]} />
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
                                <Carosel slides={assets["Events"]["Social Slides"]}/>
                            :
                                <Slideshow 
                                    slides={assets["Events"]["Social Slides"]}
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