import React from 'react'
import logo from "../assets/images/white_logo_color_background_trans@4x.png"
import '../assets/css/style.css'

import Link from 'gatsby-link';



const Header = () => (
  
            <section id="header">
                <div className="inner">
                    <span className="icon major"><img className="zenforceLogo" src={logo} alt="" /></span>
                    <h1 className="title">What is <strong>ZenForce?</strong><br /></h1>
                    <p className="description">Zenforce is a workforce management solution for 
                    increasing <br /> productivity of your field operations.</p>
                    <ul className="actions">
                        <li><Link to="#features" className="button discover">Discover More</Link></li>
                    </ul>
                </div>
            </section>
        )

export default Header
