//Home Video
import videoSrc from "../../assets/home/drd.mp4"
//Video Startup/Backup Poster
import posterSrc from "../../assets/home/team.png"
//What We Do Carosel Slides
import slides from "./slides.js"
//Our Story Photo
import ourStory from "../../assets/home/ourstory.jpg"
//Practice Section Cards
import cards from "../../components/cards.js"
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
      <div key={index} className="card">
        <div className="what-we-do-image-container">
          <img className="what-we-do-image" src={card.img} alt="" />
        </div>
        <h2 className="body-text-one-font">{card.text}</h2>
      </div>

    )
  })
  
  const whatIsDBRef = useRef(null)
  function handleArrowDown(){
    whatIsDBRef.current.scrollIntoView({behavior: "smooth"});
  }

  return (
    <>
      <video autoPlay muted loop playsInline poster={posterSrc} className="home-video">
        <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video/mp4 tag.
      </video>
      <main>
        <Navbar/>
        <header>
          <div className="header-text-container">
            <h2 className="body-text-one-font">Est. 2004</h2>
            <h1 className="heading-font">Dragonboat at UC Davis</h1>
            <h2 className="body-text-one-font">Culture - Athleticism - Community</h2>
            <Link className="primary-button" to="/join">Join <span className="body-text-one-font">Now</span></Link>
          </div>
          <div className="arrow-container">
            <span onClick={handleArrowDown} className="material-icons arrow-down">keyboard_arrow_down</span>
          </div>
        </header>
      </main>

      <section ref={whatIsDBRef} className="what-is-db-section">
            {/* 2 What is DB Headers One for Desktop one for Mobile */}
            <h1 className="sub-heading-font what-is-db-header">What is dragonboat?</h1>
            <div className="what-is-db-content">
                <div className="what-is-db-section-text-container">
                  <h1 className="sub-heading-font what-is-db-header">What is dragonboat?</h1>
                  <p className="body-text-two-font">Originating from China, this sport and festival has been a tradition for over 2,000 years. Today, dragon boat is enjoyed worldwide. A typical dragon boat crew consists of 20 people, in addition to a drummer and steersperson.</p>
                </div>
                <Carosel slides={slides}/>
            </div>
        </section>
      <section className="our-story-section">
        <h1 className="sub-heading-font">Our Story</h1>
        <div className="our-story-content">
          <img src={ourStory} alt="" />
          <div className="our-story-text">
            <h1 className="sub-heading-font">Our Story</h1>
            <p className="body-text-two-font">Davis Racing Dragons was established in 2004 by students who wanted to bring collegiate-level dragonboat to UC Davis. Since then, we have always strived to create a fun, welcoming community built on teamwork and competitive excellence. </p>
            <Link className="secondary-button" to="/about" onClick={() => {window.scrollTo(0, 0)}}>About Page</Link>
          </div>
        </div>
      </section>
      <section className="what-we-do-section">
        <h1 className="sub-heading-font">What We Do</h1>
        <div className="card-container">
          {cardBlocks}
        </div>
        <Link className="primary-button learn-more-button" to="/about">Learn More</Link>
      </section>
      <LinkSection />
    </>
    
  )
}
/*
TODO: Style Contact Page
  - connect to nodejs and firebase
TODO: style dropdown answer text

EXTRA: Races Section, Slideshow component CSS, Store page
*/