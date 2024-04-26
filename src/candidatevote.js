import React from "react"
import './candidatevote.css'
import logo from './images/logo1.png';
import { callApi,getSession,setSession,errorResponse} from "./main";

const popupwindowstyle1={width:'350px',height:'450px', background:'white'};
const logostyle1={width:'95px',height:'95px', position:'absolute', left:'130px', top: '10px'};
const logodivstyle1={height: '120px'}
export function voteparty(){
    var KT1 = document.getElementById('KT1');
    var KT2 = document.getElementById('KT2');
    var KT3 = document.getElementById('KT3');
    var KT4 = document.getElementById('KT4');
    KT1.style.border="";
    KT2.style.border="";
    KT3.style.border="";
    if(KT1.value===""){
        KT1.style.border="1px solid red";
        KT1.focus();
        return;
    }
    if (KT2.value === "") {
        KT2.style.border="1px solid red";
        KT2.focus();
        return;
    }
    if(KT3.value===""){
        KT3.style.border="1px solid red";
        KT3.focus();
        return;
    }
    if(KT4.value==="" || parseInt(KT4.value) < 18){
        KT4.style.border="1px solid red";
        KT4.focus();
        return;
    }
    var url = "http://localhost:5000/candidate/submit";
    var data = JSON.stringify({
        id: KT1.value,
        fullname:KT2.value,
        fathername:KT3.value,
        age:KT4.value
    })
    callApi("POST",url,data,candidatesuccess,errorResponse);
    KT1.value="";
    KT2.value="";
    KT3.value="";
    KT4.value="";
}
function candidatesuccess(res){
    var data = JSON.parse(res);
    alert(data);
}
class Candidatevote extends React.Component{
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
            <div className="full-height7">
                <div className="content7">
                    <div id="popupwindow1" className="popupwindow1" style={popupwindowstyle1}>
                    <center>
                        <div className="loginstyle5">Voter Verification</div>
                    </center>
                        <div className="loginstyle6">
                            <div style={logodivstyle1}>
                               <img src={logo} alt='' style={logostyle1} />
                            </div>
                            <div className="registration-info">
                                <div className="table-container">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>CandidateID</td>
                                                <td><input type="text" id="KT1" className="txtbox8" /></td>
                                            </tr>
                                            <tr>
                                                <td>Full Name</td>
                                                <td><input type="text" id="KT2" className="txtbox8" /></td>
                                            </tr>
                                            <tr>
                                                <td>Father Name</td>
                                                <td><input type="text" id="KT3" className="txtbox8" /></td>
                                            </tr>
                                            <tr>
                                                <td>Age</td>
                                                <td><input type="number" id="KT4" className="txtbox8" /></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <center>
                                        <button className="submit-button" onClick={voteparty}>Submit</button>
                                    </center>
                                </div>
                            </div>
            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Candidatevote;