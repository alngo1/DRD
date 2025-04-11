import homeTeamPhoto from "../../assets/home/team.png"
import ourStory from "../../assets/home/ourstory.jpg"
import cards from "../../components/cards.js"
// components
import Carosel from "../../components/carosel/Carosel.jsx"
import LinkSection from "../../components/link-section/LinkSection.jsx"
import Navbar from "../../components/navbar/Navbar.jsx"
// css
import './home.css'
// react router
import { Link } from 'react-router'
//layout effect

//carosel slides
import slides from "./slides.js"

export default function Home(){
  
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
  
  return (
    <>
      {/* <video controls autoplay loop muted width="250px" height="250px" poster="../../assets/home/team.png">
        <source src="../../assets/home/test.mp4" type="video/mp4" />
        Your browser does not support the video/mp4 tag.
      </video> */}
      <main className="home-team-photo">
        <Navbar/>
        <header>
          <div className="header-text-container">
            <h2 className="body-text-one-font">Est. 2004</h2>
            <h1 className="heading-font">Dragonboat at UC Davis</h1>
            <h2 className="body-text-one-font">Culture - Athleticism - Community</h2>
            <a className="primary-button" href="">Join <span className="body-text-one-font">Now</span></a>
          </div>
          <div className="arrow-container">
            <span className="material-icons arrow-down">keyboard_arrow_down</span>
          </div>
        </header>
      </main>

      <section className="what-is-db-section">
            <h1 className="sub-heading-font">What is dragonboat</h1>
            <div className="what-is-db-content">
                <div className="what-is-db-section-text-container">
                  <h1 className="sub-heading-font">What is dragonboat</h1>
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
        <a className="primary-button learn-more-colors" href="">Learn More</a>
      </section>
      <LinkSection />
    </>
    
  )
}
/*
TODO: Create Contact Page
- Create contact form
- github pages won't allow for databases so must use external form api
  - mail chimp comes to mind
  - SMTP gmail API?
TODO: style dropdown answer text

EXTRA: Races Section, Slideshow component CSS, Store page
*/