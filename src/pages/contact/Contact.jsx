import './contact.css'
import LinkSection from "../../components/link-section/LinkSection.jsx"
import Navbar from "../../components/navbar/Navbar.jsx"
import HeaderSection from "../../components/header-section/HeaderSection.jsx"

import { Link } from 'react-router'


export default function Contact(){
    return (
        <>
            <Navbar/>
            <HeaderSection
                heading="Contact Us"
                headingStyle="heading-font"
                paragraph="Have a question? Send us a message here, or through one of the following forms of contact below!"
                // visual={<img src={eventImg} className="" alt="" />}
                buttons={<button className="secondary-button event-button">View Full Calendar</button>}
            />
            <LinkSection/>
        </>
    )
}