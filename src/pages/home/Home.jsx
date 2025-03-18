import ourStory from "../../assets/home/ourstory.jpg"
import cards from "../../components/cards.js"
// components
import Carosel from "../../components/carosel/Carosel.jsx"
import LinkSection from "../../components/link-section/LinkSection.jsx"
import Navbar from "../../components/navbar/Navbar.jsx"
import HeaderSection from "../../components/header-section/HeaderSection.jsx"
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
      <div className="home-team-photo">
      </div>
      <main>
        <Navbar/>
        <header>
          <div className="header-text-container">
            <h2 className="body-text-one-font">Est. 2004</h2>
            <h1 className="heading-font">Dragonboat at UC Davis</h1>
            <h2 className="body-text-one-font">Culture - Athleticism - Community</h2>
            <a className="primary-button" href="">Join Now</a>
          </div>
          <div className="arrow-container">
            <span className="material-icons arrow-down">keyboard_arrow_down</span>
          </div>
        </header>
      </main>
      <HeaderSection
        heading="What is dragonboat?"
        headingStyle="sub-heading-font"
        paragraph="Originating from China, this sport and festival has been a tradition for over 2,000 years. Today, dragon boat is enjoyed worldwide. A typical dragon boat crew consists of 20 people, in addition to a drummer and steersperson."
        visual={<Carosel slides={slides}/>}
      />
      <section className="our-story-section">
        <img src={ourStory} alt="" />
        <div className="our-story-text">
          <h1 className="sub-heading-font">Our Story</h1>
          <p className="body-text-two-font">Davis Racing Dragons was established in 2004 by students who wanted to bring collegiate-level dragonboat to UC Davis. Since then, we have always strived to create a fun, welcoming community built on teamwork and competitive excellence. </p>
          <Link className="secondary-button" to="/about" onClick={() => {window.scrollTo(0, 0)}}>About Page</Link>
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
TODO: work on more responsive mobile design
- Home page responsiveness
  - make collapsable nav bar
    - wait for nav icon
  - wrap slide show/images and text
  - shrink or wrap what we do section
  - can leave links how it is honestly
- About page responsiveness
  - shrink image and make text readable
  - wrap cards
  - shrink faqs
- Events page responsiveness
  - shrink header image
  - shrink practice cards
TODO: Create Contact Page
- Create contact form
- github pages won't allow for databases so must use external form api
  - mail chimp comes to mind
TODO: Create Join Page
TODO: Create Store Page
- honestly can ignore might remove for now
TODO: add discord and instagram links needs wifi
TODO: Style Slideshows more
*/