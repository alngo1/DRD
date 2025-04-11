import './contact.css'
import LinkSection from "../../components/link-section/LinkSection.jsx"
import Navbar from "../../components/navbar/Navbar.jsx"
import HeaderSection from "../../components/header-section/HeaderSection.jsx"

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
            <form action="POST">
                <input type="text" name="First Name"/>
                <input type="text" name="Last Name"/>
                <input type="text" name="Email"/>
                <input type="text" name="Subject"/>
                <textarea name="Message" id="1"></textarea>
            </form>
            <LinkSection/>
        </>
    )
}