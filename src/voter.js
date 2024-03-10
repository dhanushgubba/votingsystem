import React from 'react';
import './voter.css';
import { callApi, errorResponse, getSession, setSession } from './main';
import menuicon from './images/menu.jpg';
import { NavLink } from 'react-router-dom';
import logouticon from './images/logout.png';
import Axios from 'axios';
const HS1 = { "paddingLeft": "5px", "marginRight": "20px" };
const HS2 = {"float" : "right", "padding-right" : "5px", "cursor" : "pointer"};
const HS3 = {"float" : "right", "height" : "16px", "margin-top" : "6px", "cursor" : "pointer"};
const HS4 = {"float" : "right", "padding-right" : "10px"};

class VoterRegistrationInfo extends React.Component {
    constructor(props) {
        super(props);
        this.KT1Ref = React.createRef();
        this.KT2Ref = React.createRef();
        this.KT3Ref = React.createRef();
        this.KT4Ref = React.createRef();
        this.KT5Ref = React.createRef();
        this.KT6Ref = React.createRef();
        this.KT7Ref = React.createRef();
        this.KT8Ref = React.createRef();
        this.KT9Ref = React.createRef();
    }

    voteregister = () => {
        const KT1 = this.KT1Ref.current.value;
        const KT2 = this.KT2Ref.current.value;
        const KT3 = this.KT3Ref.current.value;
        const KT4 = this.KT4Ref.current.value;
        const KT5 = this.KT5Ref.current.value;
        const KT6 = this.KT6Ref.current.value;
        const KT7 = this.KT7Ref.current.value;
        const KT8 = this.KT8Ref.current.value;
        const KT9 = this.KT9Ref.current.value;

        // Call your API to submit the data to the server
        var url = "http://localhost:5000/registers/submit";
        var data = JSON.stringify({
            fullname: KT1,
            dateofbirth: KT2,
            gender: KT3,
            nationality: KT4,
            residentialaddress: KT5,
            emailaddress: KT6,
            phonenumber: KT7,
            govtid: KT8,
            id: KT9
        });
        callApi("POST", url, data, this.votingsuccess, errorResponse);
    }

    votingsuccess = (res) => {
        var data = JSON.parse(res);
        alert(data);
    }

    render() {
        return (
            <div>
                <h1>Voter Details Information</h1>
               <div className="registration-info">
                <h2>Voter Registration Details</h2>
                <div className="table-container">
                    <table>
                        <tbody>
                            <tr>
                                <td>Full Name</td>
                                <td><input type="text" ref={this.KT1Ref} className='txtbox' /></td>
                            </tr>
                            <tr>
                                <td>Date of Birth</td>
                                <td><input type="date" ref={this.KT2Ref} className='txtbox'  /></td>
                            </tr>
                            <tr>
                                <td>Gender</td>
                                <td>
                                    <select ref={this.KT3Ref} className='txtbox' >
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Nationality</td>
                                <td><input type="text" ref={this.KT4Ref} className='txtbox'  /></td>
                            </tr>
                            <tr>
                                <td>Residential Address</td>
                                <td><input type="text" ref={this.KT5Ref} className='txtbox'  /></td>
                            </tr>
                            <tr>
                                <td>Email Address</td>
                                <td><input type="email" ref={this.KT6Ref} className='txtbox'  /></td>
                            </tr>
                            <tr>
                                <td>Phone Number</td>
                                <td><input type="tel" ref={this.KT7Ref} className='txtbox' /></td>
                            </tr>
                            <tr>
                                <td>Government-issued ID</td>
                                <td><input type="text" ref={this.KT8Ref} className='txtbox' /></td>
                            </tr>
                            <tr>
                                <td>ID Number</td>
                                <td><input type="text" ref={this.KT9Ref} className='txtbox' /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button className="submit-button" onClick={this.voteregister}>Submit</button>
            </div>

            </div>
        );
    }
}

class VoterDoneInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            candidates: [
                { id: 1, party: 'TELUGU DESAM', candidate: 'CHANDRABABU NAIDU', voteCount: 0 },
                { id: 2, party: 'YSRCP', candidate: 'JAGAN MOHAN REDDY', voteCount: 0 },
                { id: 3, party: 'JANASENA', candidate: 'PAWAN KALYAN', voteCount: 0 },
                { id: 4, party: 'BJP', candidate: 'KANNA LAKSMI NARAYANA', voteCount: 0 },
                { id: 5, party: 'Indian National Congress (INC)', candidate: 'Sake Sailajanath', voteCount: 0 },
                { id: 6, party: 'Communist Party of India (CPI)', candidate: 'RAMA KRISHNA', voteCount: 0 },
            ]
        };
    }

    handleVote = (party) => {
        // Update vote count for the selected party
        this.setState(prevState => ({
            candidates: prevState.candidates.map(candidate => {
                if (candidate.party === party) {
                    return { ...candidate, voteCount: candidate.voteCount + 1 };
                }
                return candidate;
            })
        }));
        alert(`Vote registered for candidate ${party}`);
    }

    render() {
        return (
            <div>
                <h1>Voter Details Information</h1>
                <div className="candidates-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Sl. No.</th>
                                <th>Party Name</th>
                                <th>Candidate Name</th>
                                <th>Vote</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.candidates.map((candidate, index) => (
                                <tr key={candidate.id}>
                                    <td>{index + 1}</td>
                                    <td>{candidate.party}</td>
                                    <td>{candidate.candidate}</td>
                                    <td>
                                        <button onClick={() => this.handleVote(candidate.party)}>Vote</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <VoterResultInfo candidates={this.state.candidates} />
            </div>
        );
    }
}

class VoterResultInfo extends React.Component {
    render() {
        return (
            <div>
                <h1>My Voter Result</h1>
                <div className="result-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Party Name</th>
                                <th>Vote Count</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.candidates.map(candidate => (
                                <tr key={candidate.id}>
                                    <td>{candidate.party}</td>
                                    <td>{candidate.voteCount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}




export function profileInfo() {
    var url = "http://localhost:5000/myprofile/info";
    Axios.get(url) // Change Axios.post to Axios.get for fetching data
        .then(res => loadInfo(res))
        .catch(err => errorResponse(err));
}

export function loadInfo(res) {
    var data = res.data;
    var L1 = document.getElementById('L1');
    var L2 = document.getElementById('L2');
    var L3 = document.getElementById('L3');
    var L4 = document.getElementById('L4');
    if (data.length > 0) { // Check if data exists
        L1.innerHTML = `<b style='color:red'>${data[0].firstname}</b>`;
        L2.innerText = data[0].lastname;
        L3.innerText = data[0].contactno;
        L4.innerText = data[0].emailid;
    }
}
class MyProfileInfo extends React.Component {
    componentDidMount() {
        profileInfo(); // Call profileInfo function when the component mounts
    }

    render() {
        return (
            <div className='full-height4'>
                <h3>User Profile</h3>
                <table className='tablestyle'>
                    <tbody>
                        <tr>
                            <td className='firstcolumn'>First Name</td>
                            <td><label id='L1'></label></td>
                        </tr>
                        <tr>
                            <td className='firstcolumn'>Last Name</td>
                            <td><label id='L2'></label></td>
                        </tr>
                        <tr>
                            <td className='firstcolumn'>Contact No.</td>
                            <td><label id='L3'></label></td>
                        </tr>
                        <tr>
                            <td className='firstcolumn'>Email Id</td>
                            <td><label id='L4'></label></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}


class Voter extends React.Component {
    constructor() {
        super();
        this.state = {
            showSubmenus: false,
            selectedStateImage: null,
            displayVoterInfo: false,
            displayDoneInfo: false,
            displayProfileInfo : false,
            displayResultInfo : false,
            
        };
        this.sid = getSession("sid");
        if (this.sid === "") {
            window.location.replace("/");
        }

        var url = "http://localhost:5000/home/uname";
        var data = JSON.stringify({
            emailid: this.sid
        });
        callApi("POST", url, data, this.loadUname, errorResponse);
    }

    loadUname = (res) => {
        var data = JSON.parse(res);
        var HL1 = document.getElementById("HL1");
        if (HL1) {
            HL1.innerText = `${data[0].firstname} ${data[0].lastname}`
        } else {
            console.error("Element with id 'HL1' not found in the DOM.");
        }
    }

    toggleSubmenus = () => {
        this.setState((prevState) => ({
            showSubmenus: !prevState.showSubmenus,
        }));
    };

    handleStateClick = (state) => {
        switch (state) {
            case "Voter Registration":
                this.setState({ displayVoterInfo: true, displayDoneInfo: false,displayProfileInfo:false,displayResultInfo:false });
                break;
            case "Voter Done":
                this.setState({ displayVoterInfo: false, displayDoneInfo: true ,displayProfileInfo:false,displayResultInfo:false});
                break;
            case "My Profile":
                this.setState({ displayVoterInfo: false, displayDoneInfo: false ,displayProfileInfo :true,displayResultInfo:false});
                break;
            case "Voting Result":
                this.setState({ displayVoterInfo: false, displayDoneInfo: false ,displayProfileInfo :false,displayResultInfo:true});
                break;
            default:
                this.setState({ selectedStateImage: null, displayVoterInfo: false, displayDoneInfo: false,displayResultInfo :null});
        }
    };

    logout() {
        setSession("sid", "", -1);
        window.location.replace("/");
    }

    renderStatesMenu() {
        const statesInIndia = [
            "Voter Registration", "Voter Done", "My Profile","My Voter Result "
        ];

        return (
            <div>
                <div className='menuheader' onClick={this.toggleSubmenus}>
                    <img src={menuicon} alt='' />
                    <label>MENU</label>

                </div>
                {this.state.showSubmenus && (
                    <ul className="mlist">
                        {statesInIndia.map((state, index) => (
                            <li key={index} onClick={() => this.handleStateClick(state)}>
                                <label>{state}</label>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    }

    render() {
        const { selectedStateImage,
                displayVoterInfo, 
                displayDoneInfo,
                displayProfileInfo,
                displayResultInfo
         } = this.state;
        return (
            <div className='full-height'>
            <div className='header4'>
            <label style={HS1}>eBallot | ONLINE VOTING MANAGEMENT SYSTEM</label>
                <NavLink to="/home1" className="nav-link">Home</NavLink>
                <NavLink to="/about1" className="nav-link">About</NavLink>
                <NavLink to="/voter" className="nav-link">Voter Registration</NavLink>
                <NavLink to="/PoliticalParties" className="nav-link">Political Parties</NavLink>
                <NavLink to="/changepassword" className="nav-link">Change Password</NavLink>
                <label style={HS2} onClick={this.logout}>Logout</label>
                <img src={logouticon} alt='' style={HS3} onClick={this.logout} />
                <label id='HL1' style={HS4}></label>
                <div id="header1"></div>
            </div>
                <div className='content4'>
                    <div className='menubar'>
                        <div className='menu'>
                            {this.renderStatesMenu()}
                        </div>
                    </div>
                    <div className='outlet4'>
                    
                    {selectedStateImage && (
                            <img src={selectedStateImage} alt={selectedStateImage} />
                        )}
                        {displayVoterInfo && <VoterRegistrationInfo />}
                        {displayDoneInfo && <VoterDoneInfo />}
                        {displayProfileInfo  && <MyProfileInfo />}
                        {displayResultInfo  && <VoterResultInfo />}
                        
                    </div>
                </div>
                <div className='footer4'>
                    Copyright @ Indian Culture. All rights reserved.
                </div>
            </div>
        );
    }
}

export default Voter;

