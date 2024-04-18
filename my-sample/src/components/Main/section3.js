import React from "react";
import flipImage1 from './../../Assets/flipimage/W1.png'
import flipImage2 from './../../Assets/flipimage/A2.png'
import flipImage3 from './../../Assets/flipimage/softDev.jpg'
import flipImage4 from './../../Assets/flipimage/AI2.png'
import flipImage5 from './../../Assets/flipimage/SoftIntegration.png'
import flipImage6 from './../../Assets/flipimage/CRM.png'
import flipImage7 from './../../Assets/flipimage/API1.png'

const Section3 = () => {

    return(
     <>
        <div className="container6">
            <h3>Innovative IT Solutions</h3>
            <p>Utilize our software development expertise to seamlessly integrate business applications with new or existing
            </p>
            <p>systems, ensuring streamlined operations and enhanced efficiency.</p>
        </div>
        <div className="flipcard-container">
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={flipImage1} style={{width:"220px",height:"220px"}} />
                    </div>
                    <div className="flip-card-back">
                        <div className="text-container">
                            <p>Web development refers to the creating, building, and maintaining of websites.
                                It includes aspects such as web design, web publishing, web programming, and database
                                management.
                            </p>
                        </div>
                    </div>
                </div>
        </div>
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={flipImage2} style={{width:"220px",height:"220px"}}/>
                </div>
                <div className="flip-card-back">
                    <div className="text-container">
                        <p>Application development is the process of creating software applications for various
                            platforms, such as desktop computers, mobile devices and web browsers.
                            It aims to create solutions that enable digital transformation and improve business
                            efficiency while enhancing user experience.
                        </p>
                    </div>
                </div>
            </div>

        </div>
        <div className="flip-card" >
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={flipImage3} style={{width:"220px",height:"220px", backgroundColor: "antiquewhite"}}/>
                </div>
                <div className="flip-card-back">
                    <div className="text-container">
                        <p>Software de­velopment is defined as the process of designing, cre­ating, testing, and
                            maintaining computer programs and applications. This diverse field combines creativity,
                            engineering expertise, and problem-solving abilities to produce software that satisfies
                            particular requirements and goals.</p>
                    </div>
                </div>
            </div>

        </div>
        <div className="flip-card" >
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={flipImage4} style={{width:"220px",height:"220px"}} />
                </div>
                <div className="flip-card-back">
                    <div className="text-container">
                        <p>Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that
                            are programmed to think and act like humans.
                            It involves the development of algorithms and computer programs that can perform tasks that
                            typically require human intelligence such as visual perception,
                            speech recognition, decision-making, and language translation. </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="flipcard-container">
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={flipImage5} style={{width:"220px",height:"220px"}}/>
                </div>
                <div className="flip-card-back">
                    <div className="text-container">
                        <p>The process of creating a complex information system that may include designing or building a
                            customized architecture or application,
                            integrating it with new or existing hardware, packaged and custom software, and
                            communications. </p>
                    </div>
                </div>
            </div>

        </div>
        <div className="flip-card" >
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={flipImage6} style={{width:"220px",height:"220px"}}/>
                </div>
                <div className="flip-card-back">
                    <div className="text-container">
                        <p>Customer relationship management(CRM) this can improve efficiency, productivity, and customer
                            satisfaction.
                            Some common examples of CRM integrations include connecting your CRM software to your email
                            marketing platform,
                            accounting software, or e-commerce platform. </p>
                    </div>
                </div>
            </div>

        </div>
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={flipImage7} style={{width:"220px",height:"220px"}}/>
                </div>
                <div className="flip-card-back">
                    <div className="text-container">
                        <p>Application integration is the process of getting independently built software systems to
                            work together without manual intervention.
                            Modern application design encourages the flexible exchange of data between applications for
                            increased efficiency, modularity, and reusability.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
        </>
    )

}

export default Section3;