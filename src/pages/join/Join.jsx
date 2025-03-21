import './join.css'
import LinkSection from "../../components/link-section/LinkSection.jsx"
import Navbar from "../../components/navbar/Navbar.jsx"
import HeaderSection from "../../components/header-section/HeaderSection.jsx"
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
            <HeaderSection
                heading="Join"
                headingStyle="heading-font"
                paragraph="Learn more about how to join Davis Racing Dragons!"
            />
            <div className="join-faqs-container">
                {faqs}
            </div>
            <LinkSection/>
        </>
    )
}