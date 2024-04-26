import React from "react"
import './contact.css';
import { NavLink } from "react-router-dom";
import { callApi, errorResponse} from "./main";
import image2 from './images/image2.jpg';
const space = {"height" : "10px"};
const HS1 = { "paddingLeft": "5px", "marginRight": "20px" };
const HS4 = {"float" : "right", "paddingRight" : "10px"};


export function contact(){
    var FT1 = document.getElementById('FT1');
    var FT2 = document.getElementById('FT2');
    var FT3 = document.getElementById('FT1');
    var FT4 = document.getElementById('FT2');
    var FT5 = document.getElementById('FT1');
    var FT6 = document.getElementById('FT2');
    FT1.style.border="";
    FT2.style.border="";
    FT3.style.border="";
    FT4.style.border="";
    FT5.style.border="";
    FT6.style.border="";
    if(FT1.value===""){
        FT1.style.border="1px solid red";
        FT1.focus();
        return;
    }
    if (FT2.value === "") {
        FT2.style.border="1px solid red";
        FT2.focus();
        return;
    }
    if(FT3.value===""){
        FT3.style.border="1px solid red";
        FT3.focus();
        return;
    }
    if(FT4.value===""){
        FT4.style.border="1px solid red";
        FT4.focus();
        return;
    }
    if(FT5.value===""){
        FT5.style.border="1px solid red";
        FT5.focus();
        return;
    }
    if(FT6.value===""){
        FT6.style.border="1px solid red";
        FT6.focus();
        return;
    }
    var url = "http://localhost:5000/contacts/submit";
    var data = JSON.stringify({
        name: FT1.value,
        emailid:FT2.value,
        date:FT3.value,
        numberofvotes:FT4.value,
        contactno:FT5.value,
        issueofcontact:FT6.value
    })
    callApi("POST",url,data,submitsuccess,errorResponse);
    FT1.value="";
    FT2.value="";
    FT3.value="";
    FT4.value="";
    FT5.value="";
    FT6.value="";
}
function submitsuccess(res){
    var data = JSON.parse(res);
    alert(data);
}
class Contact extends React.Component{
    render(){
        return(
            <div className='full-height10'>
                <div className='header10'>
                    <label style={HS1}>eBallot | ONLINE VOTING MANAGEMENT SYSTEM</label>
                    <NavLink to="/" className="nav-link">Home</NavLink>
                    <NavLink to="/about" className="nav-link">About</NavLink>
                    <NavLink to="/mobile" className="nav-link">Mobile Voting</NavLink>
                    <NavLink to="/contact" className="nav-link">Contact us</NavLink>
                    <label id='HL1' style={HS4}></label>
                    <div id="header10"></div>
                </div>
                <div className='content10'>
                    <center>
                        <h1 style={{ color: 'red' }}>CONTACT US</h1>
                    </center>
                    <center>
                        <h1>Welcome to the Contact Page</h1>
                    </center>
                
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
                        <div><input type='date' id='FT3' className='txtbox' /></div>
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
                        <div><button className='btn' onClick={contact}>Submit</button></div>
                    </div>
                </div>
            </div>
            <div className='footer10'>
                Copyright © 2024, eBallot.
            </div>
        </div>

        );
    }
}
export default Contact;