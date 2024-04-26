import React from "react";
import './about1.css';
import { callApi, errorResponse, getSession, setSession } from './main';
import { NavLink } from "react-router-dom";
import image4 from './images/image4.jpg'; // Import left image
import image5 from './images/image5.jpg'; // Import right image
import logouticon from './images/logout.png';
const HS1 = { "paddingLeft": "5px", "marginRight": "20px" };
const HS2 = {"float" : "right", "padding-right" : "5px", "cursor" : "pointer"};
const HS3 = {"float" : "right", "height" : "16px", "margin-top" : "6px", "cursor" : "pointer"};
const HS4 = {"float" : "right", "paddingRight" : "10px"};
const contentStyle1 = {"flex": 1, "padding": "10px"}; // Style for content div

class About1 extends React.Component {
    constructor()
    {
        super();
        this.sid = getSession("sid");
        //alert(this.sid);
        if(this.sid === "")
            window.location.replace("/");

        var url = "http://localhost:5000/home/uname";
        var data = JSON.stringify({
            emailid : this.sid
        });
        callApi("POST", url, data, this.loadUname, errorResponse);
    }
    loadUname(res)
    {
        var data = JSON.parse(res);
        var HL1 = document.getElementById("HL1");
        HL1.innerText = `${data[0].firstname} ${data[0].lastname}`
    }

    logout()
    {
        setSession("sid", "", -1);
        window.location.replace("/");
    }
    render() {
        return(
            <div className='full-height3'>
                <div className='header3'>
                    <label style={HS1}>eBallot | ONLINE VOTING MANAGEMENT SYSTEM</label>
                    <label style={HS2} onClick={this.logout}>Logout</label>
                    <img src={logouticon} alt='' style={HS3} onClick={this.logout} />
                    <NavLink to="/home1" className="nav-link">Home</NavLink>
                    <NavLink to="/about1" className="nav-link">About</NavLink>
                    <NavLink to="/voter" className="nav-link">Voter Registration</NavLink>
                    <NavLink to="/politicalparties" className="nav-link">Political Parties</NavLink>
                    <NavLink to="/changepassword" className="nav-link">Change Password</NavLink>
                    <label id='HL1' style={HS4}></label>
                    <div id="header"></div>
                </div>
                <div className='content3' style={{display: 'flex'}}> 
                    <div style={contentStyle1}>
                    <div className="about-container">
                        <div className="left-image3">
                            <img src={image4} alt="VOTING SYSTEM" />
                        </div>
                        <div className="content-text">
                            <center>
                                <h1>ABOUT US</h1>
                            </center>
                            <p>The Online Voting Management System (OVMS) is a comprehensive platform designed to modernize and streamline the electoral process. By leveraging advanced technologies and robust security measures, OVMS aims to enhance the accessibility, integrity, and transparency of elections, ensuring a fair and democratic voting experience for all.</p>

                            <h1>Mission Statement</h1>
                            <div className="right-image3">
                                <img src={image5} alt="VOTING SYSTEM" />
                            </div>
                            <p>Our mission at OVMS is to empower citizens to exercise their right to vote conveniently and securely, while safeguarding the integrity of the electoral process. We are committed to providing a user-friendly, accessible, and inclusive voting platform that fosters trust and confidence in democratic elections.
                            We strive to encourage active participation in the democratic process by facilitating voter registration, education, and turnout initiatives, ensuring that every voice is heard and every vote counts.</p>
                            <center>
                                <h1>Get involved</h1>
                            </center>
                            <p>Join us in our mission to modernize elections and promote democratic participation. Whether you're a voter, election administrator, or technologist, there are opportunities to get involved and contribute to the success of OVMS. Contact us to learn more about partnership opportunities, volunteer programs, or career opportunities with OVMS.To ensure that Online voting platform is used during the 2024 Indian Andhra Pradesh to provide Right to Vote to all citizens of India including soldiers, NRIs, migrants and other sections who are denied Right to Vote due to booth based voting.</p>
                            
                            {/*<div className="left-image3">
                                <img src={image5} alt="VOTING SYSTEM" />
                            </div>
                            <center>
                                <h1>MISSION STATEMENT</h1>
                            </center>
                            <p>To ensure that Online voting platform is used during the 2024 Indian Andhra Pradesh to provide Right to Vote to all citizens of India including soldiers, NRIs, migrants and other sections who are denied Right to Vote due to booth based voting.</p>
                            

                            <center>
                                <h1>OUR FOCUS</h1>
                            </center>
                            <p>We are a VOTING focused platform. We are not a market survey tool like Survey Monkey or opinion poll tool like poll daddy. Hence, we are also very focused on SECURITY and AUTHENICATION, unlike market survey or polling platforms where these are not major concern area.
                            We are a INDIA focused company. We would first like to make meaningful difference in our country before venturing abroad.
                            We are an ETHICS focused organization and would not take short cuts.</p>
                            <center>
                                <h1>Contact Us</h1>
                            </center>
                            <p>For inquiries, feedback, or support, please contact our team at contact@ovms.com. We welcome your questions and suggestions as we work together to build a better future for democratic elections.</p>*/}
                        </div>
                        </div>
                    </div>
                </div>
                <div className='footer3'>
                    Copyright © 2024, eBallot.
                </div>
            </div>
           
        );
    }
}

export default About1;
