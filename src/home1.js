import React from "react";
import './home1.css';
import { callApi, errorResponse, getSession, setSession } from './main';
import { NavLink } from "react-router-dom";
import image1 from './images/image1.jpg'

const HS1 = { "paddingLeft": "5px", "marginRight": "20px" };
const HS2 = {"float" : "right", "padding-right" : "5px", "cursor" : "pointer"};
const HS4 = {"float" : "right", "paddingRight" : "10px"};
const HS3 = {"width": "800px", "height": "700px", "margin": "0 auto"}; // Define HS3 style
const contentStyle1 = {"flex": 1, "padding": "10px"}; // Style for content div

class Home1 extends React.Component {
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
            <div className='full-height2'>
                <div className='header2'>
                    <label style={HS1}>eBallot | ONLINE VOTING MANAGEMENT SYSTEM</label>
                    <label style={HS2} onClick={this.logout}>Logout</label>
                    <NavLink to="/home1" className="nav-link">Home</NavLink>
                    <NavLink to="/about1" className="nav-link">About</NavLink>
                    <NavLink to="/voter" className="nav-link">Voter Registration</NavLink>
                    <NavLink to="/politicalparties" className="nav-link">Political Parties</NavLink>
                    <NavLink to="/changepassword" className="nav-link">Change Password</NavLink>
                    <label id='HL1' style={HS4}></label>
                    <div id="header"></div>
                </div>
                <div className='content2' style={{display: 'flex'}}> 
                    <img src={image1} alt='' style={HS3}/> 
                    <div style={contentStyle1}>
                        <h1>WELCOME TO ONLINE VOTING MANAGEMENT SYSTEM</h1>
                        <p>Online voting, also known as e-voting or internet voting, is a method of casting ballots in an election through electronic means, typically via the internet. It offers convenience, accessibility, and efficiency compared to traditional paper-based voting systems.</p>  
                        <h2>Importance of Online Voting System</h2>
                        <p>Online voting management systems play a crucial role in modernizing the electoral process. They facilitate secure, transparent, and efficient elections while ensuring accessibility and participation for all eligible voters.</p>
                        <h2>Ballot Creation and Management</h2>
                        <p>Creation of electronic ballots tailored to specific elections, candidates, and ballot measures.Integration of customizable ballot designs, including options for multiple-choice questions, write-in candidates, and referendum questions.</p>
                        <h2>Secure Voting Process</h2>
                        <p>Implementation of encryption techniques to protect the confidentiality and integrity of votes cast by voters.Utilization of secure transmission protocols and digital signatures to safeguard voting data during transit.</p>
                    </div>
                </div>
                <div className='footer2'>
                    Copyright © 2024, eBallot.
                </div>
            </div>
        );
    }
}

export default Home1;
