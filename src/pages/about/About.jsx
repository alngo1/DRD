import aboutUsImage from "../../assets/about/aboutus.jpg"
import boardData from "../../components/boardData.js"
import dropdownData from "../../components/dropdown/dropdownData.jsx"
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
import { useState } from "react"

export default function About(){
    const[dropdowns, setDropdowns] = useState(dropdownData);

    function handleDropdownClick(id){
        setDropdowns(prevDropdowns => {
            return prevDropdowns.map(dropdown => {
              return dropdown.id === id ? {...dropdown, expanded: !dropdown.expanded} : dropdown
            })
          })
    }

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
            return obj
        }
    })

    const secondHalfDropdowns = faqs.map((obj, index) => {
        if(index % 2 != 0){
            return obj
        }
    })
    
    const boardCards = boardData.map((obj, index) => {
        return (
            <div key={index} className="card-content">
                <img className="board-img" src={obj.img} alt="" />
                <h2 className="body-text-one-font board-name-text">{obj.name}</h2>
                <p className="body-text-two-font board-role-text">{obj.role}</p>
            </div>
        )
    })

    return (
        <>
            <Navbar/>
            <div className="header-padding">
                <HeaderSection
                    heading="About Us"
                    headingStyle="heading-font"
                    paragraph="Established in 2004, Davis Racing Dragons is a student-run collegiate-level dragonboat team. We strive to create a fun, welcoming, and tight-knit community for people of all experience levels. One of our main priorities is to offer our members an environment where they can grow as both an individual and within the team."
                    visual={<img src={aboutUsImage} className="about-us-img" alt="" />}
                />
            </div>
            <section className="board-members-section">
                <h1 className="sub-heading-font">Board Members 2024-2025</h1>
                <div className="board-card-container">
                    {boardCards}
                </div>
                <div className="join-board-container">
                    <h2 className="body-text-one-font board-interest-text">Interested in Joining Board?</h2>
                    <Link className="secondary-button board-app-color">Board Application Form</Link>
                </div>
            </section>

            {/* this is the ugliest section I'm sorry */}
            <section className="faq-section">
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
            <LinkSection/>
        </>
    )
}