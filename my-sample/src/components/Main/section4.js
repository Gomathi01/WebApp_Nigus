import React from "react";
import Desk from '../../Assets/giflogo/desk1.gif'

const Section4 = () => {
        return(
        <>
            <div className="container container-margin1 border">
                <div className="row padding">
                <div className="col-md-6 ">
                    <h4>Excellence in Every Delivery</h4>
                    <p className="final-containerText">Our services are designed to help businesses<br/> establish a robust online presence in the digital age.<br/>
                        We empower our clients to create impactful <br/>websites that effectively engage users and provide <br/>seamless
                        experiences.Whether it's an enterprise<br/> software, a corporate website, or a web application, <br/>we leverage our
                        creativityand technical expertise to<br/> develop responsive, user-friendly.</p>
                </div>
                <div className="col-md-6 image-container">
                    <img src={Desk} className="animated-image" />
                </div>
            </div>
            </div>
            
        </>
    )
}

export default Section4;