import React from "react";
import section1Img from './../../Assets/giflogo/06_08_gif.gif'

const Section1 = () => {
    window.addEventListener('scroll', function() {
            var navbar = document.querySelector('.navbar.navbar-fixed');
            var scrollPosition = window.scrollY;
        
         if (scrollPosition > 20) { 
              navbar.classList.add();
       } else {
               navbar.classList.remove('hidden');
         }
     });
    return(
        <>
        <div class="container container-margin">
        <div class="row">
            <div class="col-md-6">
                <h2>Revolutionizing Enterprise with Innovative Solutions</h2>
                <p>Modernize the organization with innovative software solutions, applications and integrations</p>
            </div>
            <div class="col-md-6">
                <img src={section1Img} alt="Image 1" class="image"/>
            </div>
            </div>
        </div>
        <h3>Empowering Our Partners For 10+ Years</h3>
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-6 section">
                    <h5>Projects</h5>
                    <p >800+ Projects</p>
                </div>
                <div className="col-md-3 col-sm-6 section">
                    <h5>Customers</h5>
                    <p>450+ Customers</p>
                </div>
                <div className="col-md-3 col-sm-6 section">
                    <h5>Countries</h5>
                    <p>7+ Countries</p>
                </div>
                <div className="col-md-3 col-sm-6 section">
                    <h5>Solutions</h5>
                    <p>20+ Solutions</p>
                </div>
            </div>
        </div>
        </>
    )

}

export default Section1;