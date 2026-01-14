import assets from "../../assets.json"

// components
import Carosel from "../../components/carosel/Carosel.jsx"
import LinkSection from "../../components/link-section/LinkSection.jsx"
import Navbar from "../../components/navbar/Navbar.jsx"
import Loading from "../../components/loading/Loading.jsx"
// css
import './home.css'
// react router
import { Link } from 'react-router'
//react youtube
import Youtube from "react-youtube"
//react
import React from "react"

import { useRef, useEffect } from "react"

export default function Home(props){

  const [enableLoading, setEnableLoading] = React.useState(true);
  const [videoPlaying, setVideoPlaying] = React.useState(false);
  
  const cardBlocks = assets["Home"]["what-we-do-cards"].map((card, index) => {
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

  const iconImages = assets["Social"].map((item, index) => {
      if(index % 2 != 0){
        return (
            <a key={index} target="_blank" className="no-experience-socials" href={item.link}>
                <img src={item.img} alt={item.alt}/>
            </a>
        )
      }
  }).reverse();


  //function to be called when react youtube api loads
  function onPlayerReady(event){
    const player = event.target;
    player.pauseVideo();
    player.mute();
    player.setSize("100%", "100%");
    player.playVideo();
    if(enableLoading == false){
      return;
    }
    setEnableLoading(false);
  }

  function onPlayerPlay(event){
    setVideoPlaying(true);
  }

  function onPlayerStateChange(event){
    const player = event.target;
    let currState = player.getPlayerState();
    switch(currState){
      case Youtube.PlayerState.UNSTARTED:
        setVideoPlaying(false);
      case Youtube.PlayerState.CUED:
        setVideoPlaying(false);
      default:
        return
    }
  }

  function playVideoIOS(){
    setVideoAutoplayBlocked(false);

  }

  const options = {
    height: "100%",
    width: "100%",
    playerVars: {
      enablejsapi: 1,
      autoplay: 1,
      controls: 1,
      disablekb: 1,
      fs: 0,
      loop: 1,
      playlist: "sx9AilbuRcE",
      rel: 0,
      playsinline: 1
    },
  };

  return (
    <>
      <Loading enabled={enableLoading}/>
      <header className="home-header">
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
      </header>

      <div className="home-video-wrapper">
          <Youtube
            videoId="sx9AilbuRcE"
            className="home-video"
            opts={options}
            onReady={onPlayerReady}
            onPlay={onPlayerPlay}
            onStateChange={onPlayerStateChange}
          />
      </div>
      {!videoPlaying && <img src={assets["Home"]["video-poster-img"]} className="home-video-placeholder"/>}
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
                    <Carosel slides={assets["Home"]["what-is-db-slides"]}/>
                </div>
            </section>
          <section className="our-story-section section-tb-padding">
            <h2 className="sub-heading-font">Our Story</h2>
            <div className="our-story-content content-max-width site-lr-padding">
              <img src={assets["Home"]["our-story"]["img"]} alt={assets["Home"]["our-story"]["alt"]}/>
              <div className="our-story-text">
                <h2 className="sub-heading-font">Our Story</h2>
                <p className="body-text-two-font">Davis Racing Dragons was established in 2004 by students who wanted to bring collegiate-level dragonboat to UC Davis. Since then, we have always strived to create a fun, welcoming community built on teamwork and competitive excellence. </p>
                <Link className="secondary-button" to="/about" onClick={() => {window.scrollTo(0, 0)}}>About Page</Link>
              </div>
            </div>
          </section>
          <section className="no-experience-section section-tb-padding site-lr-padding">
            <div className="no-experience-text-wrapper">
              <h2 className="sub-heading-font">No experience? No problem!</h2>
              <p className="body-text-one-font">Davis Racing Dragons is open to everyone!</p>
            </div>
            <div className="no-experience-button-wrapper">
              {iconImages}
              <Link to="/join" onClick={() => {window.scroll(0,0)}} className="primary-button">Join</Link>
            </div>
          </section>
          <section className="what-we-do-section section-tb-padding">
            <h2 className="sub-heading-font">What We Do</h2>
            <div className="card-container content-max-width site-lr-padding">
              {cardBlocks}
            </div>
            <Link className="primary-button learn-more-button" onClick={() => {window.scroll(0,0)}} to="/events">Learn More</Link>
          </section>
        </article>
      </main>

      <LinkSection />
    </>
    
  )
}