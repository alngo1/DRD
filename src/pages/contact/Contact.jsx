import './contact.css'
import LinkSection from "../../components/link-section/LinkSection.jsx"
import Navbar from "../../components/navbar/Navbar.jsx"
import HeaderSection from "../../components/header-section/HeaderSection.jsx"

export default function Contact(){

    function signUp(formData) {
        const data = Object.fromEntries(formData)
        //.getAll is similar to .get but for multiple elements like with checkboxes
        const allData = {
            ...data,
        }
        console.log(allData);
    }

    return (
        <>
            <Navbar/>
            <HeaderSection
                heading="Contact Us"
                headingStyle="heading-font"
                paragraph="Have a question? Send us a message here, or through one of the following forms of contact below!"
                // visual={<img src={eventImg} className="" alt="" />}
                buttons={<button className="secondary-button event-button">View Full Calendar</button>}
                visual={
                    <form className="contact-form" action={signUp}>
                        <label htmlFor="firstName">
                            First Name
                            <input type="text" id="firstName" name="firstName" defaultValue="Alex"/>
                        </label>

                        <label htmlFor="lastName">
                            Last Name
                            <input type="text" id="lastName" name="lastName" defaultValue="Ngo"/>
                        </label>
                        
                        <label htmlFor="email">Email
                            <input type="text" id="email" name="email" defaultValue="joe@schmoe.com"/>
                        </label>
                        
                        <label htmlFor="subject">Subject
                            <input type="text" id="subject" name="subject" defaultValue="bananas"/>
                        </label>

                        <label htmlFor="message">Message
                            <textarea id="message" name="message" defaultValue="AHH"></textarea>
                        </label>

                        <button className="submit-button secondary-button">Submit</button>
                    </form>
                }
            />
            <LinkSection/>
        </>
    )
}