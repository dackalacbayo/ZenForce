import React from 'react'

import pic03 from '../assets/images/pic03.jpg'
import benefit1 from '../assets/images/benefit1_white.png'
import benefit2 from '../assets/images/benefit2_white.png'
import benefit3 from '../assets/images/benefit3_white.png'
import benefit4 from '../assets/images/benefit4_white.png'
import benefit5 from '../assets/images/benefit5_white.png'
import benefit6 from '../assets/images/benefit6_white.png'


const benefits = [
    {description:"Manage all your work in place", icons: benefit1},
    {description:"Team Collaboration", icons: benefit2},
    {description:"Eliminate Geographic Barriers", icons: benefit3},
    {description:"Optimize decision making", icons: benefit5},
    {description:"Manage Deadline. Save more time on follow ups", icons: benefit4},
    {description:"Access anytime anywhere", icons: benefit6},
]

const Benefits = () => (
    
         <div>
             <div className="col-12">
                <div className="major">
                    <h2 className="features"><p className="p_benefits">- Benefits of Using ZenForce -</p><br /></h2>
                </div>
             </div>

            <div className="flex-container">
                    <ul className="major-icons">
                        <center>
                        {benefits.map((benefit,index) => (
                            <li key={index}><span className="icon style1 major "><img className="iconImage" src={benefit.icons} alt="" /></span>
                            <p className="p_benefits_descrp"> {benefit.description}</p>
                            </li>  
                         ))}
                        </center>
                    </ul>
            </div>

        </div>


        )
  

export default Benefits
