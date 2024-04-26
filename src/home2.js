import React from "react";
import './home2.css';
import { callApi, errorResponse, getSession, setSession } from './main';
import { NavLink } from "react-router-dom";
import image1 from './images/image1.jpg';
import logouticon from './images/logout.png';

class Home2 extends React.Component {
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
            <div className='full-height22'>
                <div className='header22'>
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
                <div className='content22'>
                    <img src={image1} alt='' />
                    <div className="content-text">
                        <h2>Welcome,{this.state.uname}</h2> 
                        <center>
                        <p>As you can see that you are the one of our Admin, It's very glad to meet you .</p>
                        </center>
                        
                    </div>
                </div>
                <div className='footer22'>
                    Copyright © 2024, eBallot.
                </div>
            </div>
        );
    }
}

export default Home2;
