import React from "react"
import './voterregistration.css'
import { callApi, errorResponse, getSession, setSession } from './main';

export function setCandidateId(id) {
    console.log("Candidate ID:", id);
}
export function voterregiter(){
    var LT1 = document.getElementById('LT1');
    var LT2 = document.getElementById('LT2');
    var LT3 = document.getElementById('LT3');
    var LT4 = document.getElementById('LT4');
    var LT5 = document.getElementById('LT5');
    var LT6 = document.getElementById('LT6');
    var LT7 = document.getElementById('LT7');
    var LT8 = document.getElementById('LT8');
    var LT9 = document.getElementById('LT9');
    var LT10 = document.getElementById('LT10');
    LT1.style.border="";
    LT2.style.border="";
    LT3.style.border="";
    LT4.style.border="";
    LT5.style.border="";
    LT6.style.border="";
    LT7.style.border="";
    LT8.style.border="";
    LT9.style.border="";
    LT10.style.border="";
    if(LT1.value===""){
        LT1.style.border="1px solid red";
        LT1.focus();
        return;
    }
    if(LT2.value===""){
        LT2.style.border="1px solid red";
        LT2.focus();
        return;
    }
    if(LT3.value===""){
        LT3.style.border="1px solid red";
        LT3.focus();
        return;
    }
    if(LT4.value===""){
        LT4.style.border="1px solid red";
        LT4.focus();
        return;
    }
    if(LT5.value===""){
        LT5.style.border="1px solid red";
        LT5.focus();
        return;
    }
    if(LT6.value===""){
        LT6.style.border="1px solid red";
        LT6.focus();
        return;
    }
    if(LT7.value===""){
        LT7.style.border="1px solid red";
        LT7.focus();
        return;
    }
    if(LT8.value===""){
        LT8.style.border="1px solid red";
        LT8.focus();
        return;
    }
    if(LT9.value===""){
        LT9.style.border="1px solid red";
        LT9.focus();
        return;
    }
    if(LT10.value===""){
        LT10.style.border="1px solid red";
        LT10.focus();
        return;
    }
    var url = "http://localhost:5000/registers/submit";
    var data = JSON.stringify({
        fullname: LT1.value,
        dateofbirth: LT2.value,
        gender: LT3.value,
        nationality: LT4.value,
        residentialaddress: LT5.value,
        cityofelection:LT6.value,
        emailaddress: LT7.value,
        phonenumber: LT8.value,
        govtid: LT9.value,
        id: LT10.value
    })

    callApi("POST",url,data,registersuccess,errorResponse);
    LT1.value="";
    LT2.value="";
    LT3.value="";
    LT4.value="";
    LT5.value="";
    LT6.value="";
    LT7.value="";
    LT8.value="";
    LT9.value="";
    LT10.value="";
}
export function registersuccess(res){
    var data = JSON.parse(res);
    alert(data);
}

class Voterregistration extends React.Component{
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
    render(){
        return(
            <div className="full-height4">
                <div className="content4">
                <center>
                    <h1>VOTER REGISTRATION DETAILS</h1>
                </center>
                <div className="registration-info">
                <div className="table-container">
                    <table>
                        <tbody>
                            <tr>
                                <td>Full Name</td>
                                <td><input type="text" id="LT1" className='txtbox7' /></td>
                            </tr>
                            <tr>
                                <td>Date of Birth</td>
                                <td><input type="date" id="LT2" className='txtbox7'  /></td>
                            </tr>
                            <tr>
                                <td>Gender</td>
                                <td>
                                    <select id="LT3" className='txtbox7' >
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Nationality</td>
                                <td><input type="text" id="LT4" className='txtbox7'  /></td>
                            </tr>
                            <tr>
                                <td>Residential Address</td>
                                <td><input type="text" id="LT5" className='txtbox7'  /></td>
                            </tr>
                            <tr>
                                <td>State of election</td>
                                <td>
                                    <select id="LT6" className='txtbox7' >
                                    <option value=""></option>
                                        <option value="andhrapradesh">andhrapradesh</option>
                                        <option value="aruncachalpradesh">aruncachalpradesh</option>
                                        <option value="assam">assam</option>
                                        <option value="bihar">bihar</option>
                                        <option value="chattisgarh">chattisgarh</option>
                                        <option value="goa">goa</option>
                                        <option value="gujarat">gujarat</option>
                                        <option value="haryana">haryana</option>
                                        <option value="himachalpradesh">himachalpradesh</option>
                                        <option value="jharkhand">jharkhand</option>
                                        <option value="kerala">kerala</option>
                                        <option value="karnataka">karnataka</option>
                                        <option value="madhyapradesh">madhyapradesh</option>
                                        <option value="maharashtra">maharashtra</option>
                                        <option value="manipur">manipur</option>
                                        <option value="meghalaya">meghalaya</option>
                                        <option value="mizoram">mizoram</option>
                                        <option value="nagaland">nagaland</option>
                                        <option value="odisha">odisha</option>
                                        <option value="punjab">punjab</option>
                                        <option value="rajasthan">rajasthan</option>
                                        <option value="sikkim">sikkim</option>
                                        <option value="tamilnadu">tamilnadu</option>
                                        <option value="telangana">telangana</option>
                                        <option value="tripura">tripura</option>
                                        <option value="uttarakhand">uttarakhand</option>
                                        <option value="uttarpradesh">uttarpradesh</option>
                                        <option value="westbengal">westbengal</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Email Address</td>
                                <td><input type="email" id="LT7" className='txtbox7'  /></td>
                            </tr>
                            <tr>
                                <td>Phone Number</td>
                                <td><input type="tel" id="LT8" className='txtbox7' /></td>
                            </tr>
                            <tr>
                                <td>Government-issued ID</td>
                                <td><input type="text" id="LT9" className='txtbox7'/></td>
                            </tr>
                            <tr>
                                <td>candidateId</td>
                                <td><input type="text" id="LT10" className='txtbox7' /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <center>
                    <button className="submit-button" onClick={voterregiter}>Submit</button>
                </center>
            </div>

         </div>
     </div>
        );
    }
}
export default Voterregistration;
