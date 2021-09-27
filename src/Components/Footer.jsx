import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <div>
            <div className="footer">

            <div className="footer_icons">

<a href="https://www.instagram.com/fidjoke/"  target="_blank" rel="noreferrer" className="footer_i">
  <FaInstagram  size={50}   style={{ color: 'black' ,width:"23px",height:"23px" }} />
  </a>
  <a href="https://twitter.com/fidalmathew10"  target="_blank" rel="noreferrer" className="footer_i">
  <FaTwitter size={50} style={{ color: 'black' ,width:"23px",height:"23px"}} />
  </a>
  <a href="https://www.linkedin.com/in/fidal-mathew-82aba7200/"  target="_blank" rel="noreferrer" className="footer_i">
  <FaLinkedin size={50} style={{ color: 'black' ,width:"23px",height:"23px"}} />
  </a>
  <a href="https://github.com/FidalMathew"  target="_blank" rel="noreferrer" className="footer_i">
  <FaGithub size={50} style={{ color: 'black' ,width:"23px",height:"23px"}} />
  </a>
  
<span style={{position:"relative",left:"1%",fontSize:"18px"}}>| No Bootstrap components Used</span>


</div>

            <span style={{position:"relative",left:"43%",fontSize:"18px"}}>Copyright &#169;2021 | Made by Fidal</span>

            </div>
        </div>
    )
}
