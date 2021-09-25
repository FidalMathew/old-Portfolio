import React from 'react'
// import { Link } from 'react-router-dom'
import'./Navbar.css'
import {Link} from 'react-scroll';

export default function Navbar() {
    return (
        <>


    <div className="navbar">
        <div ><Link activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={500} >  Fidal</Link></div>
        <div className="menu">
        <ul>                                 
            <li><Link activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={500} >    Home</Link></li>
            <li> <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500} >
                About
            </Link>
</li>
            <li> <Link activeClass="active" to="skills" spy={true} smooth={true} offset={0} duration={500} >   Skills</Link></li>
            <li> <Link activeClass="active" to="work" spy={true} smooth={true} offset={0} duration={500} >   Work</Link></li>
            <li> <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={500} >   Contact</Link></li>
                
            </ul>
        </div>
    </div>




        </>
    )
}
