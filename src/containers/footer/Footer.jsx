import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'

const Footer = () => {
    return (
        <div className="gpt3__footer section__padding">
            <div className="gpt3__footer-heading">
                <h1 className="gradient__text">
                    Do you want to step in to the future before others?
                </h1>
            </div>

            <div className="gpt3__footer-btn">
                <p>Request Early Access</p>
            </div>

            <div className="gpt3__footer-links">
                <div className="gpt3__footer-links__logo">
                    <img src={gpt3Logo} alt="Logo" />
                    <p>
                        Fake Street K1 KD2 US, All rights reserved.
                    </p>
                </div>

                <div className="gpt3__footer-links__div">
                    <h4>Links</h4>
                    <p>How it works?</p>
                    <p>Social Media</p>
                    <p>Contact</p>
                </div>
                <div className="gpt3__footer-links__div">
                    <h4>Company</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Work with us</p>
                </div>
                <div className="gpt3__footer-links__div">
                    <h4>Get in touch</h4>
                    <p>Fake Street K1 KD2 US</p>
                    <p>(888)123-4567</p>
                    <p>info@gpt3.com</p>
                </div>
            </div>

            <div className="gpt3__footer-copyright">
                <p>© 2023 GPT3 All Rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer