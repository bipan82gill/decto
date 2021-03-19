import React from 'react';
import './Footer.css'
import {GoLocation}  from 'react-icons/go';

import {FiPhoneCall} from 'react-icons/fi';
import {HiOutlineMail} from 'react-icons/hi';

const Footer =()=>{
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* col-1 */}
                    <div className="col">
                   
                        <h2>Decto Canada Ltd.</h2>
                        <p>It was founded with an idea to finish the gap between developers, experts, and businessmen so that customers can interact directly with the developers and experts to explain their business requirements. Along with the web development requirements.</p>
                    
                    </div>
                    {/* col-2 */}
                    <div className="col">
                    <h2>Contact Us</h2>
                        <ul className="list-unstyled">
                            <li><HiOutlineMail/>&nbsp;info@dectocanada.com</li>
                            <li><FiPhoneCall/> &nbsp;+1 647-894-0055</li>
                            <li><GoLocation/> &nbsp;75-1708, charolais blvd, Brampton, Ontario, Canada. L6Y2R8</li>
                            
                        </ul>
                        
                        
                    </div>
                    {/* col-3 */}
                    <div className="col">
                   
                        <h2>Quick Links</h2>
                        <ul className="list-unstyled">
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Projects</li>
                            <li>Contact-us</li>
                        </ul>
                      
                    </div>
                    {/* col-4 */}
                    <div className="col">
                    <h2>Services</h2>
                        <ul className="list-unstyled">
                            <li>Web Development</li>
                            <li>Digital Marketing</li>
                            <li>CRM Integration</li>
                            <li>SEO</li>
                        </ul>
                        
                        </div>
                        
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                    &copy;{new Date().getFullYear()} Decto Canada Ltd. |  All Rights Reserved  |  Terms of Service | Privacy
                    </p>
                </div>
            </div>

     
    )
}
export default Footer;