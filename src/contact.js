import React from "react"
import './contact.css';
import { NavLink } from "react-router-dom";
import { callApi, errorResponse } from "./main";
import image2 from './images/image2.jpg';
const space = {"height" : "10px"};
const HS1 = { "paddingLeft": "5px", "marginRight": "20px" };
const HS4 = {"float" : "right", "paddingRight" : "10px"};

function Contact() {
    function phone() {
        var FT1 = document.getElementById('FT1');
        var FT2 = document.getElementById('FT2');
        var FT3 = document.getElementById('FT3');
        var FT4 = document.getElementById('FT4');
        var FT5 = document.getElementById('FT5');
        var FT6 = document.getElementById('FT6');
        FT1.style.border = "";
        FT2.style.border = "";
        FT3.style.border = "";
        FT4.style.border = "";
        FT5.style.border = "";
        if(FT1.value==="") {
            FT1.style.border = "1px solid red";
            FT1.focus();
            return;
        }
        if(FT2.value==="") {
            FT2.style.border = "1px solid red";
            FT2.focus();
            return;
        }
        if(FT3.value==="") {
            FT3.style.border = "1px solid red";
            FT3.focus();
            return;
        }
        if(FT4.value==="") {
            FT4.style.border = "1px solid red";
            FT4.focus();
            return;
        }
        if(FT5.value==="") {
            FT5.style.border = "1px solid red";
            FT5.focus();
            return;
        }
        if(FT6.value==="") {
            FT6.style.border = "1px solid red";
            FT6.focus();
            return;
        }
        var url = "https://localhost:5000/contacts/message";
        var data = JSON.stringify({
            name:FT1.value,
            emailid:FT2.value,
            date:FT3.value,
            numberofvoters:FT4.value,
            contactnumber:FT5.value,
            issuetocontactus:FT6.value
        })
        callApi("POST",url,data,submitsuccess,errorResponse);
        //alert("Issue Submitted Successfully")
        FT1.value = "";
        FT2.value = "";
        FT3.value = "";
        FT4.value = "";
        FT5.value = "";
        FT6.value = "";
        var contacts = document.getElementById('contacts');
        contacts.style.display = "none";
    }    

    function submitsuccess(res) {
        var data = JSON.parse(res);
        alert(data);
        window.location.replace("/contact");
    }

    return (
        <div className='full-height'>
            <div className='header'>
                <label style={HS1}>eBallot | ONLINE VOTING MANAGEMENT SYSTEM</label>
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/about" className="nav-link">About</NavLink>
                <NavLink to="/mobile" className="nav-link">Mobile Voting</NavLink>
                <NavLink to="/contact" className="nav-link">Contact us</NavLink>
                <NavLink to="/help" className="nav-link">Help/Support</NavLink>
                <label id='HL1' style={HS4}></label>
                <div id="header"></div>
            </div>
            <center>
                <h1 style={{ color: 'red' }}>CONTACT US</h1>
            </center>
            
            <center>
                <h1>Welcome to the Contact Page</h1>
            </center>
            <div className='content'>
                <div className="contentstyle">
                    <div className="left-image1">
                        <img src={image2} alt="VOTING SYSTEM" />
                    </div>
                    <div className="content-right">
                        <div>Name*</div>
                        <div><input type='text' id='FT1' className='txtbox' /></div>
                        <div style={space}></div>
                        <div>Email Id*</div>
                        <div><input type='text' id='FT2' className='txtbox' /></div>
                        <div style={space}></div>
                        <div>Date*</div>
                        <div><input type='text' id='FT3' className='txtbox' /></div>
                        <div style={space}></div>
                        <div>Number of Voters*</div>
                        <div><input type='text' id='FT4' className='txtbox' /></div>
                        <div style={space}></div>
                        <div>Contact No.*</div>
                        <div><input type='text' id='FT5' className='txtbox' /></div>
                        <div style={space}></div>
                        <div>Issue to Contact Us *</div>
                        <div><input type='text' id='FT6' className='txtbox' /></div>
                        <div style={space}></div>
                        <div style={space}></div>
                        <div><button className='btn' onClick={phone}>Submit</button></div>
                    </div>
                </div>
            </div>
            <div className='footer'>
                Copyright © 2024, eBallot.
            </div>
        </div>
    );   
}

export default Contact;
