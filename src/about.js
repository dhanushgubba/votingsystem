import React from "react"
import './about.css';
import { NavLink } from "react-router-dom";
import image4 from './images/image4.jpg'; // Import left image
import image5 from './images/image5.jpg'; // Import right image
import image from './images/image.jpeg';

const HS1 = { "paddingLeft": "5px", "marginRight": "20px" };
const HS4 = {"float" : "right", "paddingRight" : "10px"};

class About extends React.Component {
    
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
                        <div className="left-image">
                            <img src={image4} alt="VOTING SYSTEM" />
                        </div>
                        <div className="content-text">
                            <center>
                                <h1>ABOUT US</h1>
                            </center>
                            <p>Online Voting is a Online-based voting platform that allows you to create and manage your own election. Online Voting is much more than a platform - it's a revolution. Online Voting is what mobile banking is to cash transactions, Online Voting is what WhatsApp is to the postal department, Online Voting is what mobile share trading is to paper share trading.</p>
                            <p>Today voting means - traveling to a booth, standing there in a queue for hours, getting hand inked to vote. Online Voting lets voters vote directly from their mobile, from the comforts of their homes, and that also within a few seconds.</p>
                            <p>If you have to choose between spending Rs. 30,000 Crores, 2 months, and 1 Crore man-days to manage an election with a 66% voter turnout Vs spending less than 10% cost, 10% time, and 10% effort and still manage 10 times better security and close to 100% voter turnout - what would you choose?</p>

                            <h1>Logic Behind The Name - Online Voting</h1>
                            <div className="right-image">
                                <img src={image5} alt="VOTING SYSTEM" />
                            </div>
                            <p>Online Voting is a fight to ensure each and every citizen of the country gets his Right to Vote. And Right to Vote is not limited to just the political election but each and every election be it housing society election, club election, professional body election or the national election. Nobody should be denied his Right to Vote due to his geographical location, his work commitments, his health issues, weather etc.Right to Vote is a mission to empower stakeholders and ensure that they get their Right to Vote.</p>
                            
                            <center>
                                <h1>THE VISION</h1>
                            </center>
                            <p>Increase stakeholder participation in decision making across organizations by providing Right2Vote to all stakeholders</p>
                            <p>To make organizations more efficient by making the activity of stakeholder participation in decision making very efficient in terms of cost, time and effort involved</p>
                            

                            <center>
                                <h1>THE MISSION</h1>
                            </center>
                            <p>To ensure that Online voting platform is used during the 2024 Indian Andhra Pradesh to provide Right to Vote to all citizens of India including soldiers, NRIs, migrants and other sections who are denied Right to Vote due to booth based voting.</p>
                            

                            <center>
                                <h1>OUR FOCUS</h1>
                            </center>
                            <p>We are a VOTING focused platform. We are not a market survey tool like Survey Monkey or opinion poll tool like poll daddy. Hence, we are also very focused on SECURITY and AUTHENICATION, unlike market survey or polling platforms where these are not major concern area.
                            We are a INDIA focused company. We would first like to make meaningful difference in our country before venturing abroad.
                            We are an ETHICS focused organization and would not take short cuts.</p>
                            

                            <center>
                                <h1>MEET THE TEAM</h1>
                            </center>
                            <center>
                                <div className="left-image1">
                                    <img src={image} alt="GUBBA VENKATA NAGA DHANUSH" />
                                </div>
                            </center>
                            

                        
                        
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

export default About;
