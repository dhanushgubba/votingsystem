import React from 'react';
import './changepassword.css';
import { NavLink } from "react-router-dom";
import { callApi, errorResponse, getSession, setSession } from './main';
const HS1 = { "paddingLeft": "5px", "marginRight": "20px" };
const HS2 = {"float" : "right", "padding-right" : "5px", "cursor" : "pointer"};
const HS4 = {"float" : "right", "paddingRight" : "10px"};

export function updatePwd()
{
    var uname = getSession("sid");
    var T1 = document.getElementById("T1");
    var url = "http://localhost:5000/login/signin";
    var data = JSON.stringify({
        emailid: uname,
        pwd: T1.value
    });
    callApi("POST", url, data, validatePwd, errorResponse);

    T1.value="";
}

export function validatePwd(res)
{
    var data = JSON.parse(res);
    if(data === 0)
        alert("Invalid Credentials...");
    else
    {
        var T2 = document.getElementById('T2');
        var T3 = document.getElementById('T3');
        if(T2.value !== T3.value)
        {
            alert("New password and Re-Type password are not matched");
            return;
        }
        var url = "http://localhost:5000/cp/updatepwd";
        var input = JSON.stringify({
            emailid : getSession("sid"),
            pwd: T2.value
        });
        callApi("POST", url, input, updatePwdSuccess, errorResponse);

        T2.value="";
        T3.value="";
    }
}

export function updatePwdSuccess(res)
{
    var data = JSON.parse(res);
    alert(data);
}

class ChangePassword extends React.Component
{
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

    render()
    {
        return(
            <div className='full-height6'>
                <div className='header6'>
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
                <div className='cpcontent'>
                    <div className='content9'>
                    <h3>Change Your Password</h3>
                    <table>
                    <tr>
                        <td>Current Password* <input type='text' id='T1' className='txtbox2' /></td>
                    </tr>
                    <tr>
                        <td>New Password* <input type='text' id='T2' className='txtbox2'  /></td>
                    </tr>
                    <tr>
                        <td>Re-type New Password* <input type='text' id='T3' className='txtbox2' /></td>
                    </tr>
                    </table>
                    <button className='button7' onClick={updatePwd}>Update</button>
                </div>
                </div>
            </div>
        );
    }
}

export default ChangePassword;