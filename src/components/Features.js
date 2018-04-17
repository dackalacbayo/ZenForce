import React from 'react'

import pic01 from '../assets/images/pic01.jpg'
import feature1 from '../assets/images/feature_img1.png'
import feature2 from '../assets/images/feature_img2.png'
import feature3 from '../assets/images/feature_img3.png'

const features = [
    {title: 'Notifications for Individual and broadcast messages'},
    {title: 'Task Creation & Management'},
    {title: 'Email Integration'},
    {title: 'Calendar View'},
    {title: 'Task List View'},
    {title: 'Expense Tracker'},
    {title: 'In-App Search Facility'},
    {title: 'Commenting Facility'},
    {title: 'Template Creation For Recurring Tasks'},
    {title: 'Budget Tracker'},
    {title: 'Address Book For Client Details'},
    {title: 'Work Group Creation and Management'},
    {title: 'Check In/Out from Sites'},
    {title: 'Geo Tagging'},
    {title: 'Offline and Online Mode'},
    {title: 'Mobile Responsive Design'},
    {title: 'Chat Facility'},
]

const image = [ 
    {pic: feature1},
    {pic: feature2},
    {pic: feature3},
]


const Features = () => (

           <div>
                 <div className="major">
                    <h2 className="features"><p className="p_features"> Features of ZenForce </p><br /></h2>
                </div>
         
                <div className="flex-container">
                    <div className="feature_dscrp">
                       <ul className="aa">
                        {features.map((item,index) => (
                            <p key={index} className="p_features_title"> {item.title} </p>
                        ))}
                        </ul><br />
                    </div>

                    <div className="feature_img">
                        <span className="image">
                         {image.map((row,index) => (
                           <img key={index} className="img-margin" src={row.pic} alt="" />
                          ))}
                        </span>
                    </div>
                </div>

            </div>

        )
 

export default Features

