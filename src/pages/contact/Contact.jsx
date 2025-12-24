import './contact.css'
import LinkSection from "../../components/link-section/LinkSection.jsx"
import Navbar from "../../components/navbar/Navbar.jsx"
import HeaderSection from "../../components/header-section/HeaderSection.jsx"
import axios from 'axios'

export default function Contact(){

    // async function signUp(formData) {
    //     const data = Object.fromEntries(formData)
    //     //.getAll is similar to .get but for multiple elements like with checkboxes
    //     const allData = {
    //         ...data,
    //     }
    //     try {
    //         const response = await axios.post("https://dn5vq5i4b1.execute-api.us-west-1.amazonaws.com/Prod", allData);
    //     } catch (caught){
    //         if (!caught.response) {
    //             // Network error occurred
    //             console.error('Network error:', caught);
    //         } else {
    //             // The server responded with a status other than 200 range
    //             console.error('Error response:', caught.response);
    //         }
    //     }
    // }

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
                    <form name="contact" className="contact-form" method="POST" /*action={signUp}*/>
                        <input type="hidden" name="form-name" value="contact"/>

                        <input name="bot-field" type="text" className="hidden-bot-field"/>

                        <label htmlFor="firstName">
                            First Name
                            <input type="text" id="firstName" name="firstName" defaultValue="Joe"/>
                        </label>

                        <label htmlFor="lastName">
                            Last Name
                            <input type="text" id="lastName" name="lastName" defaultValue="Schmoe"/>
                        </label>
                        
                        <label htmlFor="email">Email
                            <input type="text" id="email" name="email" defaultValue="joe@schmoe.com"/>
                        </label>
                        
                        <label htmlFor="subject">Subject
                            <input type="text" id="subject" name="subject" defaultValue="Bananas"/>
                        </label>

                        <label htmlFor="message">Message
                            <textarea id="message" name="message" defaultValue="AHH"></textarea>
                        </label>

                        <div class="g-recaptcha" data-sitekey="6LfQZzUsAAAAAHvNh_fQ-JifG2A7_EwKgbphwIe2" data-action="send-email"></div>

                        {/* <p className="captcha">
                            <div data-netlify-recaptcha="true"></div>
                        </p> */}

                        <button className="submit-button secondary-button">Submit</button>
                    </form>
                }
            />
            <LinkSection/>
        </>
    )
}