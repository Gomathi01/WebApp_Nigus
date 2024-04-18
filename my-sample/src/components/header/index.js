import React from 'react' 
import logo from '../../Assets/giflogo/nigus1.jpeg'
import Submit  from '../../Assets/giflogo/person.png'
import Headphone  from '../../Assets/giflogo/headphone-icon.png'


const Header = () => {
    return(
    <header className="header-page">
       <nav className="navbar navbar-expand-lg navbar-fixed">
           <div className="container well bg-white">
               <a className="logo" href="#"><img src={logo} alt="logo"/></a>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                   <ul className="nav navbar-nav " id="menu">
                       <li className="nav-item active" style={{fontWeight: "bold"}}>
                           <a className="nav-link active" aria-current="page" href="#">Services</a>
                       </li>
                       <li className="nav-item" style={{fontWeight: "bold"}}>
                           <a className="nav-link active" href="#">Solutions</a>
                       </li>
                       <li className="nav-item" style={{fontWeight: "bold"}}>
                           <a className="nav-link active" href="#">Industries</a>
                       </li>
                       <li className="nav-item" style={{fontWeight: "bold"}}>
                           <a className="nav-link active" href="#">About Us</a>
                       </li>
                       <li className="nav-item" style={{fontWeight: "bold"}}>
                           <a className="nav-link active" href="#">Contact Us</a>
                       </li>
                       <li className="nav-content">
                           <a className="nav-link " href="#">sales@nigussystems.com</a>
                       </li>
                       <li className="nav-content">
                           <a className="nav-link " href="#">+91 98806 98312</a>
                       </li>
                       <li>
                           <button className="btn " type="submit"><img src={Submit} alt="submit"/>Sales</button>
                       </li>
                       <li>
                           <button className="btn " type="submit"><img src={Headphone} /> Support</button>
                       </li>
                   </ul>
               </div>
           </div>
           
       </nav>
       <nav className="navbar navbar-expand-lg navbar-fixed">
           <div className="container well bg-white">
               <div className="collapse center-align navbar-collapse" id="navbarSupportedContent">
                   <ul className="navbar-nav" id="menu1">
                       <li className="nav-item2" style={{fontWeight: "bold"}}>
                           <a className="nav-link active" aria-current="page" href="#">Web Development</a>
                       </li>
                       <li className="nav-item2" style={{fontWeight: "bold"}}>
                           <a className="nav-link active" href="#">Application Development</a>
                       </li>
                       <li className="nav-item2" style={{fontWeight: "bold"}}>
                           <a className="nav-link active" href="#">Software Development</a>
                       </li>
                       <li className="nav-item2" style={{fontWeight: "bold"}}>
                           <a className="nav-link active" href="#">AI/ML Development</a>
                       </li>
                       <li className="nav-item2" style={{fontWeight: "bold"}}>
                           <a className="nav-link active" href="#">System Integration</a>
                       </li>
                   </ul>
               </div>
           </div>
       </nav>
      
    </header>
    
    )
    
}

export default Header;