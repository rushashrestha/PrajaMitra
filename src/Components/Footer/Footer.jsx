import React from "react";
import "./Footer.css";
import { FaGithub } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer-title">
        <span className="text">प्रजा MITRA</span> 
      </h2>
      <p className="footer-subtitle">
        EMPOWERING CITIZENS, SIMPLIFYING GOVERNANCE - ONE CLICK AT A TIME.
      </p>
      <ul className="footer-links">
                <div className="name-list">
                <li>Rusha</li>
                <a href="https://github.com/rushashrestha" target="-blank">
                    <FaGithub className="giicons" />{" "}
                  </a>
                </div>
               
               <div className="name-list">
               <li>Rushma</li>
                <a href='https://github.com/rusma07' target="-blank">
                        <FaGithub className="giicons" />
                    </a>
               </div>
               
               <div className="name-list">
               <li>Rigen</li>
                <a href='https://github.com/rigen-sht' target="-blank">
                        <FaGithub className="giicons" />
                    </a>
               </div>
                
            </ul>
      <div className="footer-copyright">
        <hr/>
        COPYRIGHT © 2024 - ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};

export default Footer;
