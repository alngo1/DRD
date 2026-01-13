import './contact.css'
import LinkSection from "../../components/link-section/LinkSection.jsx"
import Navbar from "../../components/navbar/Navbar.jsx"
import HeaderSection from "../../components/header-section/HeaderSection.jsx"
import axios from 'axios'
import ReCAPTCHA from 'react-google-recaptcha'
import React from 'react'

export default function Contact(){

    const refReCAPTCHA = React.useRef(null);

    function handleCAPTCHA(){
        let val = refReCAPTCHA.current.getValue();
        if(!val){
            alert("Please complete the reCAPTCHA before submitting the form.");
        }
    }

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
            <section className="header-section section-tb-padding site-lr-padding content-max-width">
                <h1 className="heading-font">Contact Us</h1>
                <div className="header-content">
                    <div className="header-section-text-container">
                        <h1 className="heading-font">Contact Us</h1>
                        <p className="body-text-two-font">Have a question? Send us a message here, or through one of the following forms of contact below!</p>
                    </div>
                    <form name="contact" className="contact-form" method="POST" /*action={signUp}*/>
                        <input type="hidden" name="form-name" value="contact"/>

                        <input name="bot-field" type="text" className="hidden-bot-field"/>

                        <label htmlFor="firstName">
                            First Name
                            <input type="text" id="firstName" name="firstName" placeholder="---" required/>
                        </label>

                        <label htmlFor="lastName">
                            Last Name
                            <input type="text" id="lastName" name="lastName" placeholder="---" required/>
                        </label>
                        
                        <label htmlFor="email">Email
                            <input type="text" id="email" name="email" placeholder="---" required/>
                        </label>
                        
                        <label htmlFor="subject">Subject
                            <input type="text" id="subject" name="subject" placeholder='e.g. "Interest in Joining or Collab"' required/>
                        </label>

                        <label htmlFor="message">Message
                            <textarea id="message" name="message" placeholder="please enter email message here..." required></textarea>
                        </label>

                        <ReCAPTCHA
                            ref={refReCAPTCHA}
                            className="g-recaptcha"
                            sitekey="6LfQZzUsAAAAAHvNh_fQ-JifG2A7_EwKgbphwIe2"
                            data-action="send-email"
                        />
                        <button type="submit" onClick={handleCAPTCHA} className="submit-button secondary-button">Submit</button>
                    </form>

                </div>
            </section>
            <LinkSection/>
        </>
    )
}