import aboutUsImage from "../../assets/about/aboutus.jpg"
import boardData from "./boardData.js"
import dropdownData from "./faqData.jsx"
// Components
import LinkSection from "../../components/link-section/LinkSection.jsx"
import Navbar from "../../components/navbar/Navbar.jsx"
import HeaderSection from "../../components/header-section/HeaderSection.jsx"
import Dropdown from "../../components/dropdown/Dropdown.jsx"
// Css
import './about.css'
// router
import { Link } from "react-router"
// state
import { useState, useEffect } from "react"

import img0 from "../../assets/about/board_photos/default.png"


export default function About(props){
    const [boardMemberDropdown, setBoardMemberDropdown] = useState(false);
    const[dropdowns, setDropdowns] = useState(dropdownData);

    // function for board card dropdown
    // and faq section dropdown respectively
    function handleBoardDropdown(){
        setBoardMemberDropdown(prev => !prev);
    }

    function handleDropdownClick(id){
        setDropdowns(prevDropdowns => {
            return prevDropdowns.map(dropdown => {
              return dropdown.id === id ? {...dropdown, expanded: !dropdown.expanded} : dropdown
            })
          })
    }

    // creating list of dropdowns
    // then seperating into two distinct dropdown sections
    let faqs = dropdowns.map(obj => {
        const questionTextList = obj.question.map((text, index) => index == obj.spanIndex ? <span key={index}>{obj.question[obj.spanIndex]}</span>: text);
        return (
            <Dropdown 
                key={obj.id}
                id={obj.id}
                question={questionTextList}
                answer={obj.answer}
                isExpanded={obj.expanded}
                onClick={() => handleDropdownClick(obj.id)}
            />
        )
    })

    const firstHalfDropdowns = faqs.map((obj, index) => {
        if(index % 2 == 0){
            return {...obj, key: index}
        }
    })

    const secondHalfDropdowns = faqs.map((obj, index) => {
        if(index % 2 != 0){
            return {...obj, key: index}
        }
    })
    

    // creating board cards from card data
    // to be placed as a list in the jsx
    const boardCards = boardData.map((obj, index) => {
        return (
            <figure key={index} className="card-content">
                {/* <img className="board-img" src={obj.img} alt="" /> */}
                <img className="board-img" src={img0} alt={`Photo of ${obj.name}`} />
                <figcaption className="card-text">
                    <h2 className="body-text-one-font board-name-text">{obj.name}</h2>
                    <p className="body-text-two-font board-role-text">{obj.role}</p>
                </figcaption>
            </figure>
        )
    })

    //clicking on a link /about/#faq-section will scroll to the faq-section
    //otherwise it will try and find the question
    useEffect(() => {
        const cssClass = window.location.href.substring(
            window.location.href.lastIndexOf('#') + 1
        );
        const element = document.getElementsByClassName(cssClass)[0];
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);

    return (
        <>
            <Navbar/>
            <main>
                <article>
                    <HeaderSection
                        heading="About Us"
                        headingStyle="heading-font"
                        paragraph="Established in 2004, Davis Racing Dragons is a student-run collegiate-level dragonboat team. We strive to create a fun, welcoming, and tight-knit community for people of all experience levels. One of our main priorities is to offer our members an environment where they can grow as both an individual and within the team."
                        visual={<img src={aboutUsImage} className="about-us-img" alt="drd members preparing to team chant" />}
                    />
                    {props.isMobile ? 
                            <section className="board-dropdown-section">
                                <Dropdown
                                    isExpanded={boardMemberDropdown}
                                    onClick={handleBoardDropdown}
                                    question="Board Members 2024-2025"
                                    answer={
                                        <div className="board-card-container">
                                            {boardCards}
                                        </div>
                                    }
                                />
                            </section>
                        :
                            <section className="board-members-section section-tb-padding">
                                <h2 className="sub-heading-font">Board Members 2024-2025</h2>
                                <div className="board-card-container content-max-width site-lr-padding ">
                                    {boardCards}
                                </div>
                            </section>
                    }

                    <section className="faq-section content-max-width site-lr-padding section-tb-padding">
                        <div className="faq-content">
                            <h1 className="sub-heading-font faq-text-color">Frequently Asked Questions</h1>
                            <div className="dropdown-container-container">
                                <div className="dropdown-container">
                                    {firstHalfDropdowns}
                                </div>
                                <div className="dropdown-container">
                                    {secondHalfDropdowns}
                                </div>
                            </div>
                        </div>
                    </section>
                </article>
            </main>
            <LinkSection/>
        </>
    )
}