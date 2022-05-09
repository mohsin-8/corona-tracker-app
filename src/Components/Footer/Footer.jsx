import React from 'react';
import "./Footer.css";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
    return (
        <>
            <div className="footer_container">
                <hr />

                <div className="footer">
                    <div className="intro">
                        <h3>Developer by: Mohsin Ali Khan</h3> <br />
                        <h4>Email: alikhanmohsin420@gmail.com</h4> <br />
                    </div>

                    <div className="icons">
                        <span><a href="https://github.com/mohsin-8" rel="noreferrer" target="_blank"><BsGithub /></a></span>
                        <span><a href="https://www.facebook.com/mohsin.khan.370" rel="noreferrer" target="_blank"><BsFacebook /></a></span>
                        <span><a href="https://www.instagram.com/m0m0o00/?hl=en" rel="noreferrer" target="_blank"><BsInstagram /></a></span>
                        <span><a href="https://www.linkedin.com/in/mohsin-ali-khan-1071ab1b6/" rel="noreferrer" target="_blank"><BsLinkedin /></a></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;