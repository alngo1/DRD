import './join.css'
import LinkSection from "../../components/link-section/LinkSection.jsx"
import Navbar from "../../components/navbar/Navbar.jsx"
import Dropdown from "../../components/dropdown/Dropdown.jsx"

import { useState } from 'react'

import { Link } from 'react-router'

import joindata from './joindata.jsx'

export default function Join(){

    const[dropdowns, setDropdowns] = useState(joindata);
    

    function handleDropdownClick(id){
        setDropdowns(prevDropdowns => {
            return prevDropdowns.map(dropdown => {
                return dropdown.id === id ? {...dropdown, expanded: !dropdown.expanded} : dropdown
            })
        })
    }

    let faqs = dropdowns.map(obj => {
        return (
            <Dropdown 
                key={obj.id}
                id={obj.id}
                question={obj.question}
                answer={obj.answer}
                isExpanded={obj.expanded}
                displayNumber={true}
                onClick={() => handleDropdownClick(obj.id)}
            />
        )
    })

    return (
        <>
            <Navbar/>
            <section className="join-section">
                <h1 className="heading-font">Join</h1>
                <p className="body-text-two-font">Learn more about how to join Davis Racing Dragons!</p>
                <div className="join-faqs-container">
                    {faqs}
                </div>
                <div className="join-final-questions">
                    <p className="body-text-one-font">Questions?</p>
                    <div className="final-buttons">
                        <Link onClick={()=>window.scrollTo(0,0)} to="/contacts" className="secondary-button">Contact Us</Link>
                        <Link onClick={()=>window.scrollTo(0,0)} to="/about/#faq-section" className="secondary-button">FAQ</Link>
                    </div>
                </div>
            </section>
            <LinkSection/>
        </>
    )
}