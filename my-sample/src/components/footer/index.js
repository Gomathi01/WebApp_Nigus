import React from 'react'
import FooterLogo from './../../Assets/giflogo/nigus1.jpeg'
import LinkedIn from './../../Assets/giflogo/logo-Linkedin.png'

const Footer = () => {
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return(
        <footer className="footer-page container">
            <div className="container" style={{textAlign: "center"}}>
                <img src={FooterLogo} className="nlogo" style={{textAlign: 'center', }}/>
                <h5>Nigus Systems Private Limited</h5>
                <p style={{fontSize: "medium",paddingLeft:"7px"}}>We work across 24 x 7 to help you run your <br/>business
                    without any hassle.</p>
                <img src={LinkedIn} />
                <p style={{fontSize: "medium", paddingTop: "5px"}} > © 2024 Nigus Systems Pvt Ltd</p>
            </div>
            <div className="scroll-btn">
                <button className="scrollUpBtn" onClick={goToTop}>^</button>
            </div>
        </footer>
    )
}

export default Footer;