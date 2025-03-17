import './join.css'
import LinkSection from "../../components/link-section/LinkSection.jsx"
import Navbar from "../../components/navbar/Navbar.jsx"
import HeaderSection from "../../components/header-section/HeaderSection.jsx"

import { Link } from 'react-router'


export default function Join(){
    return (
        <>
            <Navbar/>
            <HeaderSection
                heading="Join"
                headingStyle="heading-font"
                paragraph="Learn more about how to join Davis Racing Dragons!"
            />
            <LinkSection/>
        </>
    )
}