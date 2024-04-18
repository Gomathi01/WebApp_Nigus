import React from "react";
import Scroll1 from './../../Assets/scroll/1.jpeg'
import Scroll2 from './../../Assets/scroll/2.jpeg'
import Scroll3 from './../../Assets/scroll/3.jpeg'
import Scroll4 from './../../Assets/scroll/4.jpeg'
import Scroll5 from './../../Assets/scroll/5.jpeg'
import Scroll6 from './../../Assets/scroll/6.jpeg'
import Scroll7 from './../../Assets/scroll/7.jpeg'
import Scroll8 from './../../Assets/scroll/8.jpeg'
import Scroll9 from './../../Assets/scroll/9.jpeg'
import Scroll10 from './../../Assets/scroll/10.jpeg'
import Scroll11 from './../../Assets/scroll/11.jpeg'
import Scroll12 from './../../Assets/scroll/12.jpeg'
import Scroll13 from './../../Assets/scroll/13.jpeg'
import Scroll14 from './../../Assets/scroll/14.jpeg'
import Scroll15 from './../../Assets/scroll/15.jpeg'
import Scroll16 from './../../Assets/scroll/16.jpeg'
import Scroll17 from './../../Assets/scroll/17.jpeg'
import Scroll18 from './../../Assets/scroll/18.jpeg'
import Scroll19 from './../../Assets/scroll/19.jpeg'

const Section2 = () => {
    const data = [Scroll1, Scroll2, Scroll3, Scroll4, Scroll5, Scroll6, Scroll7, Scroll8, Scroll9, Scroll10, Scroll11, Scroll12, Scroll13, Scroll14, Scroll15, Scroll16, Scroll17, Scroll18, Scroll19]
    const Img  = [];
    data.forEach((data, index) => {
        console.log(data, index)
       return (Img.push(<img src={data} width="130" height="100" />))
    })

    return(
        <div className="container">
            <marquee behavior="alternate" direction="left" scrollamount="20">
                <div className="scroll-container">
                    <div className="scroll-content">
                        {Img}
                    </div>
                </div>
            </marquee>
        </div>
    )

}

export default Section2;