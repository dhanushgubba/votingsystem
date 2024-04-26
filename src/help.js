import React from "react";
import "./help.css";
import { callApi, errorResponse, getSession, setSession } from './main';
import { NavLink } from "react-router-dom";
import logouticon from './images/logout.png';

class Help extends React.Component {
    constructor() {
        super();
        this.state = {
            uname: "" // Initialize uname state
        };
        this.sid = getSession("sid");
        if (this.sid === "")
            window.location.replace("/");

        var url = "http://localhost:5000/home/uname";
        var data = JSON.stringify({
            emailid: this.sid
        });
        callApi("POST", url, data, this.loadUname.bind(this), errorResponse);
    }

    loadUname(res) {
        var data = JSON.parse(res);
        var uname = `${data[0].firstname} ${data[0].lastname}`;
        this.setState({ uname }); // Update uname state with retrieved value
    }

    logout() {
        setSession("sid", "", -1);
        window.location.replace("/");
    }

    render() {
        return (
            <div className='full-height25'>
                <div className='header25'>
                <label style={{"paddingLeft": "5px", "marginRight": "20px"}}>eBallot | ONLINE VOTING MANAGEMENT SYSTEM</label>
                    <label style={{"float": "right", "paddingRight": "10px"}} onClick={this.logout}>Logout</label>
                    <img src={logouticon} alt='' style={{"float": "right", "height": "16px", "marginTop": "6px", "cursor": "pointer"}} onClick={this.logout} />
                    <NavLink to="/home2" className="nav-link">Home</NavLink>
                    <NavLink to="/candidates" className="nav-link">Candidates</NavLink>
                    <NavLink to="/apolitical" className="nav-link">Apolitical</NavLink>
                    <NavLink to="/help" className="nav-link">Help</NavLink>
                    <label id='HL1' style={{"float": "right", "paddingRight": "10px"}}>{this.state.uname}</label>
                    <div id="header"></div>
                </div>
                <div className='content25'>
                    <div className="help-section">
                        <h2>Need Help?</h2>
                        <p>Welcome to the help section of eBallot. If you have any questions or encounter any issues while using our system, please refer to the following resources:</p>
                        <ul>
                            <li><strong>FAQs:</strong> Check out our Frequently Asked Questions (FAQs) section for answers to common queries.</li>
                            <li><strong>Contact Support:</strong> If you can't find the answer in the FAQs, feel free to reach out to our support team for assistance. You can contact us via email or phone.</li>
                            <li><strong>User Guide:</strong> Explore our comprehensive user guide for detailed instructions on using various features of eBallot.</li>
                        </ul>
                        <p>We're here to help make your voting experience as smooth as possible. Thank you for using eBallot!</p>
                    </div>
                </div>
                <div className='footer25'>
                    Copyright © 2024, eBallot.
                </div>
            </div>
        );
    }
}

export default Help;
