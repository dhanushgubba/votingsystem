import React from "react"
import './mobilevoting.css';
import { NavLink } from "react-router-dom";
import image6 from './images/image6.jpg'; // Import left image
import image7 from './images/image7.jpg';
import image9 from './images/image9.jpg';
import image10 from './images/image10.jpg';
import image11 from './images/image11.jpg';
const HS1 = { "paddingLeft": "5px", "marginRight": "20px" };
const HS4 = {"float" : "right", "paddingRight" : "10px"};

class Mobilevoting extends React.Component {
    
    render() {
        return (
            <div className='full-height'>
                <div className='header'>
                    <label style={HS1}>eBallot | ONLINE VOTING MANAGEMENT SYSTEM</label>
                    <NavLink to="/" className="nav-link">Home</NavLink>
                    <NavLink to="/about" className="nav-link">About</NavLink>
                    <NavLink to="/mobile" className="nav-link">Mobile Voting</NavLink>
                    <NavLink to="/contact" className="nav-link">Contact us</NavLink>
                    <NavLink to="/help" className="nav-link">Help/Support</NavLink>
                    <label id='HL1' style={HS4}></label>
                    <div id="header"></div>
                </div>
                <div className='content'>
                    <div className="about-container">
                        <div className="content-text">   
                            <center>
                                <h1>WHAT IS MOBILE VOTING ??</h1>
                            </center>
                            <p>Mobile voting or online voting is a system of voting where people can vote directly from their mobile, anytime and from anywhere. Mobile voting is a revolution which is disrupting the traditional election systems with the power of the internet.
                            Mobile voting offers several potential benefits, including increased accessibility for voters who may have difficulty reaching traditional polling places, greater convenience, and potentially higher voter turnout. However, it also raises concerns about security, privacy, and the integrity of the voting process.</p>
                            <div className="right-image">
                                <img src={image6} alt="" />
                            </div>
                            <div className="right-image">
                                <img src={image7} alt="" />
                            </div>
                            <center>
                                <h1>Key elements of Mobile Voting are :</h1>
                            </center>
                            <h2>1.Convenience</h2>
                            <p>Voters can cast their votes directly from their mobile phones, eliminating the need to travel to a physical voting booth or use specialized equipment. Their personal mobile device serves as their voting tool.</p>
                            <h2>2.Accessibility:</h2>
                            <p>Mobile voting allows voters to participate from anywhere, without being restricted to a specific location or polling station.</p>
                            <h2>3.Flexibility:</h2>
                            <p>With mobile voting, voters have the flexibility to cast their votes at any time during the election period, 24 hours a day. There's no need to wait in lines or for polling booths to open.
                            The process of mobile voting is straightforward, transparent, and secure. It offers cost and time efficiency compared to traditional voting methods.</p>
                            <center>
                                <h1>Steps in Mobile Voting:</h1>
                            </center>
                            <div className="left-image">
                                <img src={image9} alt="" />
                            </div>
                            <p>1.Voter gets a SMS notification with an election link.</p>
                            <p>2.Voter clicks on the link which takes him to the login page of the website.</p>
                            <p>3.Voter logs in using his mobile number and One Time Password (OTP) delivered to him via SMS. For critical elections, there is the option of multiple layers of authentication including Aadhaar biometric / OTP, picture capture, email OTP etc.</p>
                            <p>4.Result is automatically computed and published instantly after voting closes</p>
                            <div className="left-image">
                                <img src={image10} alt="" />
                            </div>
                            <div className="left-image">
                                <img src={image11} alt="" />
                            </div>

                        
                        </div>  
                    </div>
                </div>
                <div className='footer'>
                    Copyright © 2024, eBallot.
                </div>
            </div>
        );
    }
}

export default Mobilevoting;
