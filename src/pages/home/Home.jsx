//Home Video
import videoSrc from "../../assets/home/drd.mp4"
//Video Startup/Backup Poster
import posterSrc from "../../assets/home/team.png"
//What We Do Carosel Slides
import slides from "./slides.js"
//Our Story Photo
import ourStory from "../../assets/home/ourstory.jpg"
//Practice Section Cards
import cards from "./cards.js"
// components
import Carosel from "../../components/carosel/Carosel.jsx"
import LinkSection from "../../components/link-section/LinkSection.jsx"
import Navbar from "../../components/navbar/Navbar.jsx"
// css
import './home.css'
// react router
import { Link } from 'react-router'


import { useRef, useEffect } from "react"

export default function Home(props){
  
  const cardBlocks = cards.map((card, index) => {
    return (
      <figure key={index} className="card">
        <img className="what-we-do-image" src={card.img} alt="" />
        <figcaption className="body-text-one-font">{card.text}</figcaption>
      </figure>

    )
  })
  
  const whatIsDBRef = useRef(null)
  function handleArrowDown(){
    whatIsDBRef.current.scrollIntoView({behavior: "smooth"});
  }

  return (
    <>
      <header>
        <Navbar/>
        <div className="header-text-container content-max-width site-lr-padding">
          <h1 className="heading-font">
            <span className="body-text-one-font">Est. 2004</span>
            <br/>
            Dragonboat at UC Davis
          </h1>
          <p className="body-text-one-font">Culture - Athleticism - Community</p>
          <Link className="primary-button" to="/join">Join <span className="body-text-one-font">Now</span></Link>
          <div className="arrow-container">
            <button onClick={handleArrowDown} className="material-icons arrow-down">keyboard_arrow_down</button>
          </div>
        </div>
        <video autoPlay muted loop playsInline poster={posterSrc} className="home-video">
          <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video/mp4 tag.
        </video>
      </header>
      <main>
        <article>
          <section ref={whatIsDBRef} className="what-is-db-section section-tb-padding">
                {/* 2 What is DB Headers One for Desktop one for Mobile */}
                <h2 className="sub-heading-font what-is-db-header">What is dragonboat?</h2>
                <div className="what-is-db-content content-max-width site-lr-padding">
                    <div className="what-is-db-content-text">
                      <h2 className="sub-heading-font what-is-db-header">What is dragonboat?</h2>
                      <p className="body-text-two-font">Originating from China, this sport and festival has been a tradition for over 2,000 years. Today, dragon boat is enjoyed worldwide. A typical dragon boat crew consists of 20 people, in addition to a drummer and steersperson.</p>
                    </div>
                    <Carosel slides={slides}/>
                </div>
            </section>
          <section className="our-story-section section-tb-padding">
            <h2 className="sub-heading-font">Our Story</h2>
            <div className="our-story-content content-max-width site-lr-padding">
              <img src={ourStory} alt="A Photo of DRD to End Race Day"/>
              <div className="our-story-text">
                <h2 className="sub-heading-font">Our Story</h2>
                <p className="body-text-two-font">Davis Racing Dragons was established in 2004 by students who wanted to bring collegiate-level dragonboat to UC Davis. Since then, we have always strived to create a fun, welcoming community built on teamwork and competitive excellence. </p>
                <Link className="secondary-button" to="/about" onClick={() => {window.scrollTo(0, 0)}}>About Page</Link>
              </div>
            </div>
          </section>
          <section className="what-we-do-section section-tb-padding">
            <h2 className="sub-heading-font">What We Do</h2>
            <div className="card-container content-max-width site-lr-padding">
              {cardBlocks}
            </div>
            <Link className="primary-button learn-more-button" to="/about">Learn More</Link>
          </section>
        </article>
      </main>

      <LinkSection />
    </>
    
  )
}