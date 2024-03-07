import React from 'react';
import { FaTwitter, FaWhatsapp } from 'react-icons/fa';
import {FaSquareInstagram} from 'react-icons/fa6'
import {FaLinkedin} from 'react-icons/fa';
import Logo from "./Logo.jpg"

import './Footer.css'

const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <div className="footer">
          <div className="footer-content">
            <img src={Logo} alt="logo" height={50} width={50} style={{borderRadius: "20px"}}/>
            <p className='company-name'><span>Railworld India Private Limited</span></p>
            <div className="contact">
              <div className="address">
                <p className='address-detail'>Address: <span>175 & 176, Bannerghatta
                  Main Rd, Dollars Colony,
                  Bengaluru, Karnataka
                  560076, India</span></p>
              </div>
            </div>
          </div>

          <div className="query">
            <div className="employee-query">
              <p className='employee'><span>Employee Queries</span></p>
              <a href=""><span>support@rwi.com</span></a>
            </div>

            <div className="general-query">
              <p className='general'><span>General Queries</span></p>
              <a href=""><span>ping@rwi.com</span></a>
            </div>
          </div>






          {/* Footer services */}

          <div className="footer-items">
            <div className="links">
              <label htmlFor="">Links</label>
              <a className="link" href=""><span>About</span></a>
              <a className="link" href=""><span>Blog</span></a>
              <a className="link" href=""><span>Admin</span></a>
              <a className="link" href=""><span>Home</span></a>
              <a className="link" href=""><span>Employee</span></a>
            </div>

            <div className="services">
              <label htmlFor="">Services</label>
              <a className="service" href=""><span>Leaves</span></a>
              <a className="service" href=""><span>Dashboard</span></a>
              <a className="service" href=""><span>Contact</span></a>
              <a className="service" href=""><span>Griviances</span></a>
              <a className="service" href=""><span>Documentation</span></a>
            </div>
          </div>
        </div>
        <br />
        <hr />

        {/* Left - right portion */}

        <div className="bottom-item">
          <div className='bottom'><span>Copyright &reg; All Rights Reserved</span></div>
          <div className="right">
            <FaWhatsapp size={25} />
            <FaSquareInstagram size={25}/>
            <FaLinkedin size={25}/>
            <FaTwitter size={25}/>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
 