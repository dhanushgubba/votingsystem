import React from "react";
import './politicalparties.css';
import { callApi, errorResponse, getSession, setSession } from './main';
import { NavLink } from "react-router-dom";

const HS1 = { "paddingLeft": "5px", "marginRight": "20px" };
const HS2 = {"float" : "right", "padding-right" : "5px", "cursor" : "pointer"};
const HS4 = {"float" : "right", "paddingRight" : "10px"};

class PoliticalParties extends React.Component {
    constructor() {
        super();
        this.sid = getSession("sid");
        if(this.sid === "")
            window.location.replace("/");

        var url = "http://localhost:5000/home/uname";
        var data = JSON.stringify({
            emailid : this.sid
        });
        callApi("POST", url, data, this.loadUname, errorResponse);
    }

    loadUname(res) {
        var data = JSON.parse(res);
        var HL1 = document.getElementById("HL1");
        HL1.innerText = `${data[0].firstname} ${data[0].lastname}`
    }

    logout() {
        setSession("sid", "", -1);
        window.location.replace("/");
    }

    render() {
        return (
            <div className='full-height5'>
                <div className='header5'>
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
                <div className='content5' style={{display: 'flex'}}> 
                    <div>
                        <center>
                            <h2>POLITICAL PARTIES</h2>
                        </center>
                        <div className="table-container">
                            <h3>List Of Parties</h3>
                        <div className="party-list">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Serial No</th>
                                        <th>Party Name</th>
                                        <th>Candidate Name</th>
                                        <th>Party Symbol</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Example of a single party */}
                                    <tr>
                                        <td>1</td>
                                        <td>TELUGU DESAM </td>
                                        <td>CHANDRABABU NAIDU</td>
                                        <td>CYCLE</td>
                                    </tr>
                                    {/* Repeat this structure for each party */}
                                    <tr>
                                        <td>2</td>
                                        <td>YSRCP</td>
                                        <td>JAGAN MOHAN REDDY</td>
                                        <td>FAN</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>JANASENA</td>
                                        <td>PAWAN KALYAN</td>
                                        <td>GLASS</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>KANNA LAKSMI NARAYANA</td>
                                        <td>BJP</td>
                                        <td>FLOWER</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Sake Sailajanath</td>
                                        <td>CONGRESS</td>
                                        <td>HAND</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>RAKESH YADAV</td>
                                        <td>Janata Dal (United)</td>
                                        <td>ARROW</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='footer5'>
                    Copyright © 2024, eBallot.
                </div>
            </div>
        );
    }
}

export default PoliticalParties;
