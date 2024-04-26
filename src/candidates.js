import React from 'react';
import './candidates.css';
import { callApi, errorResponse, getSession, setSession } from './main';
import { NavLink } from "react-router-dom";
import logouticon from './images/logout.png';

class Candidates extends React.Component {
    constructor() {
        super();
        this.state = {
            uname: "", // Initialize uname state
            voters: [] // Initialize voters state to store voter data
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
        this.setState({ uname }); 
    }

    logout() {
        setSession("sid", "", -1);
        window.location.replace("/");
    }

  
    
    render() {
        return (
            <div className='full-height23'>
                <div className='header23'>
                    <label style={{ "paddingLeft": "5px", "marginRight": "20px" }}>eBallot | ONLINE VOTING MANAGEMENT SYSTEM</label>
                    <label style={{ "float": "right", "paddingRight": "10px" }} onClick={this.logout}>Logout</label>
                    <img src={logouticon} alt='' style={{ "float": "right", "height": "16px", "marginTop": "6px", "cursor": "pointer" }} onClick={this.logout} />
                    <NavLink to="/home2" className="nav-link">Home</NavLink>
                    <NavLink to="/candidates" className="nav-link">Candidates</NavLink>
                    <NavLink to="/apolitical" className="nav-link">Apolitical</NavLink>
                    <NavLink to="/help" className="nav-link">Help</NavLink>
                    <label id='HL1' style={{ "float": "right", "paddingRight": "10px" }}>{this.state.uname}</label>
                    <div id="header"></div>
                </div>
                <div className='content23'>
                    <table className="candidates-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Full Name</th>
                                <th>Date of Birth</th>
                                <th>Gender</th>
                                <th>Nationality</th>
                                <th>Residential Address</th>
                                <th>Email Address</th>
                                <th>Phone Number</th>
                                <th>Govt ID</th>
                                <th>ID</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Render the details for each candidate */}
                            <tr>
                                <td>1</td>
                                <td>Dhanush</td>
                                <td>20-07-2005</td>
                                <td>Male</td>
                                <td>Indian</td>
                                <td>Guntur</td>
                                <td>2200030302@kluniversity.in</td>
                                <td>9100638384</td>
                                <td>634959399302</td>
                                <td>2200030302</td>
                                <td>
                                    <button onClick={() => this.addCandidateToDatabase()}>Add to Database</button>
                                </td> 
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Yasaswi</td>
                                <td>19-12-2003</td>
                                <td>Male</td>
                                <td>Indian</td>
                                <td>anantapur</td>
                                <td>yasaswi005@gmail.com</td>
                                <td>9494195522</td>
                                <td>685800204545</td>
                                <td>123</td>
                                <td>
                                    <button onClick={() => this.addCandidateToDatabase()}>Add to Database</button>
                                </td> 
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>VENKAT</td>
                                <td>20-07-2005</td>
                                <td>Male</td>
                                <td>Indian</td>
                                <td>Guntur</td>
                                <td>2200030302@kluniversity.in</td>
                                <td>9100638384</td>
                                <td>123456</td>
                                <td>30302</td>
                                <td>
                                    <button onClick={() => this.addCandidateToDatabase()}>Add to Database</button>
                                </td> 
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>PRASAD</td>
                                <td>14-05-1974</td>
                                <td>Male</td>
                                <td>Indian</td>
                                <td>Guntur</td>
                                <td>2200030302@kluniversity.in</td>
                                <td>9100638384</td>
                                <td>123456</td>
                                <td>1</td>
                                <td>
                                    <button onClick={() => this.addCandidateToDatabase()}>Add to Database</button>
                                </td> 
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='footer23'>
                    Copyright © 2024, eBallot.
                </div>
            </div>
        );
    }
}

export default Candidates;
