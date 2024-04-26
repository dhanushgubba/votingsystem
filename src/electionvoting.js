import React from "react";
import './electionvoting.css';
import { callApi, errorResponse, getSession, setSession } from './main';
import tdpImage from './images/tdp.jpg';
import yscrcpImage from './images/ysrcp.jpg';
import janasenaImage from './images/janasena.jpg';
import bjpImage from './images/bjp.jpg';
import cpiImage from './images/cpi.jpg';        
import notaImage from './images/nota.png'
class Electionvoting extends React.Component {
    constructor() {
        super();
        this.state = {
            showPartyList: true,
            message: "",
            hasVoted: false,
            votedParty: null,
            votedParties: [] // Track voted parties for the current user
        };
        this.sid = getSession("sid");
        if (this.sid === "")
            window.location.replace("/");

        this.checkVotingStatus();
        this.loadUserName();
    }

    checkVotingStatus() {
        var url = "http://localhost:5000/voting/status";
        var data = JSON.stringify({
            emailid: this.sid
        });
        callApi("POST", url, data, this.handleVotingStatus.bind(this), errorResponse);
    }

    handleVotingStatus(response) {
        const { voted, party } = JSON.parse(response);
        if (voted) {
            this.setState({ hasVoted: true, votedParty: party, showPartyList: false, message: "Voting has been completed." });
        }
    }

    loadUserName() {
        var url = "http://localhost:5000/home/uname";
        var data = JSON.stringify({
            emailid: this.sid
        });
        callApi("POST", url, data, this.handleUserName.bind(this), errorResponse);
    }

    handleUserName(res) {
        var data = JSON.parse(res);
        var HL1 = document.getElementById("HL1");
        HL1.innerText = `${data[0].firstname} ${data[0].lastname}`;
    }

    logout() {
        setSession("sid", "", -1);
        window.location.replace("/");
    }

    submitVote(partyName) {
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
        callApi("POST", url, data, this.handleVoteResponse.bind(this, partyName), errorResponse);
    }

    handleVoteResponse(partyName, response) {
        const updatedVotedParties = [...this.state.votedParties, partyName];
        this.setState({ message: "Voting submitted successfully.", showPartyList: false, hasVoted: true, votedParties: updatedVotedParties });
    }

    render() {
        const { showPartyList, message, hasVoted, votedParty } = this.state;

        return (
            <div className='full-height8'>
                <div className='content8' style={{ display: 'flex' }}>
                    <div>
                        <center>
                            {message && <p>{message}</p>}
                        </center>
                        {showPartyList && !hasVoted &&
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
                                                <th>Vote</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>TELUGU DESAM </td>
                                                <td>CHANDRABABU NAIDU</td>
                                                <td>CYCLE</td>
                                                <td><img src={tdpImage} alt="TDP party symbol" /></td>
                                                <td><button className="vote-button" onClick={() => this.submitVote("TELUGU DESAM")}>Vote</button></td>
                                            </tr>
                                            {/* Repeat for other parties */}
                                            {/* Repeat this structure for each party */}
                                            <tr>
                                                <td>2</td>
                                                <td>YSRCP</td>
                                                <td>JAGAN MOHAN REDDY</td>
                                                <td>FAN</td>
                                                <td><img src={yscrcpImage} alt="YSRCP party symbol" /></td>
                                                <td><button className="vote-button" onClick={() => this.submitVote("YSRCP")}>Vote</button></td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>JANASENA</td>
                                                <td>PAWAN KALYAN</td>
                                                <td>GLASS</td>
                                                <td><img src={janasenaImage} alt="Janasena party symbol" /></td>
                                                <td><button className="vote-button" onClick={() => this.submitVote("JANASENA")}>Vote</button></td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>BJP</td>
                                                <td>KANNA LAKSMI NARAYANA</td>
                                                <td>FLOWER</td>
                                                <td><img src={bjpImage} alt="BJP party symbol" /></td>
                                                <td><button className="vote-button" onClick={() => this.submitVote("BJP")}>Vote</button></td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>INC(Indian National Congress)</td>
                                                <td>Sake Sailajanath</td>
                                                <td>HAND</td>
                                                <td><img src={cpiImage} alt="INC paVrty symbol" /></td>
                                                <td><button className="vote-button" onClick={() => this.submitVote("INC")}>Vote</button></td>
                                            </tr>
                                            <tr>
                                                <td>6</td>
                                                <td>NOTA</td>
                                                <td>--</td>
                                                <td>--</td>
                                                <td><img src={notaImage} alt="None of the Above" /></td>
                                                <td><button className="vote-button" onClick={() => this.submitVote("NOTA")}>Vote</button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        }
                        {!showPartyList && hasVoted && <p>You have already voted for {votedParty}.</p>}
                    </div>
                </div>
            </div>
        );
    }
}

export default Electionvoting;
