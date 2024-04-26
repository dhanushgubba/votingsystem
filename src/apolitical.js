import React from 'react';
import './apolitical.css';
import { callApi, errorResponse, getSession, setSession } from './main';
import { NavLink } from "react-router-dom";
import tdpImage from './images/tdp.jpg';
import ysrcpImage from './images/ysrcp.jpg';
import janasenaImage from './images/janasena.jpg';
import bjpImage from './images/bjp.jpg';
import cpiImage from './images/cpi.jpg';
import notaImage from './images/nota.png';
import logouticon from './images/logout.png';

class Apolitical extends React.Component {
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
    submitParty(partyName) {
        // Check if the user has already voted for this party
        if (this.state.votedParties.includes(partyName)) {
            alert("You have already voted for this party.");
            return;
        }

        var url = "http://localhost:5000/voting/vote";
        var data = JSON.stringify({
            emailid: this.sid,
            party: partyName
        });
        callApi("POST", url, data, this.handlePartyResponse.bind(this, partyName), errorResponse);
    }

    handlePartyResponse(partyName, response) {
        const updatedVotedParties = [...this.state.votedParties, partyName];
        this.setState({ message: "Voting submitted successfully.", showPartyList: true, hasVoted: true, votedParties: updatedVotedParties });
    }
    render() {
        return (
            <div className='full-height24'>
                <div className='header24'>
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
                <div className='content24'>
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
                                        <th>Party Notation</th>
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
                                        {/*eslint-disable-next-line*/}
                                        <img src={tdpImage} alt={"Description of image"} />

                                    </tr>
                                    
                                    {/* Repeat this structure for each party */}
                                    <tr>
                                        <td>2</td>
                                        <td>YSRCP</td>
                                        <td>JAGAN MOHAN REDDY</td>
                                        <td>FAN</td>
                                        <td><img src={ysrcpImage} alt="YSRCP SYMBOL" /></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>JANASENA</td>
                                        <td>PAWAN KALYAN</td>
                                        <td>GLASS</td>
                                        <td><img src={janasenaImage} alt="" /></td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>BJP</td>
                                        <td>KANNA LAKSMI NARAYANA</td>
                                        <td>FLOWER</td>
                                        <td><img src={bjpImage} alt="" /></td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>INC(Indian National Congress)</td>
                                        <td>Sake Sailajanath</td>
                                        <td>HAND</td>
                                        <td><img src={cpiImage} alt="" /></td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>NOTA</td>
                                        <td>--</td>
                                        <td>--</td>
                                        <td><img src={notaImage} alt="None of the Above" /></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='footer24'>
                    Copyright © 2024, eBallot.
                </div>
            </div>
        );
    }
}

export default Apolitical;
