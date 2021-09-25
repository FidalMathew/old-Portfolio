import React from 'react'
import { Link } from 'react-router-dom'
import'./Navbar.css'

export default function Navbar() {
    return (
        <>
    <div className="navbar">
        <div ><Link to="#" >  Fidal</Link></div>
        <div className="menu">
        <ul>                                 
            <li><Link to="#">    Home</Link></li>
            <li> <Link to="#" >   About</Link></li>
            <li> <Link to="#">   Skills</Link></li>
            <li> <Link to="#">   Work</Link></li>
            <li> <Link to="#">   Contact</Link></li>
                
            </ul>
        </div>
    </div>




        </>
    )
}
