import React from "react"
import './admin.css';
import logo from './images/logo.png'
import { callApi, errorResponse, setSession } from './main';
const popupwindowstyle={width:'300px',height:'450px', background:'white'};
const logostyle={width:'75px',height:'75px', position:'absolute', left:'115px', top: '10px'};
const logodivstyle={height: '100px'}
const space={height:'10px'}

function Admin(){
    window.onload = function(){
        var admin = document.getElementById('admin');
        admin.style.display="block";    
    }
    function validation(){
        var T1 = document.getElementById('T1');
        var T2 = document.getElementById('T2');
        var url = "http://localhost:5000/admin/signin";
        var data = JSON.stringify({
            emailid:T1.value,
            pwd : T2.value
        })
        callApi("POST",url,data,adminsuccess,errorResponse)
    }
    function adminsuccess(res){
        var data = JSON.parse(res);
        if(data === 1){
            var T1 = document.getElementById('T1');
            setSession("sid",T1.value,(24*60));
            window.location.replace("/home2");
        }
        else{
            alert("Invalid Credentials!!");
        }
    }
    function adminregistration(){
        var T1 = document.getElementById('T1');
        var T2 = document.getElementById('T2');
        T1.value = "";
        T2.value = "";

        var reg1 = document.getElementById('adminregistration');
        var admin = document.getElementById('admin');
        admin.style.display = "none";
        reg1.style.display = "block";
    }
    function adminregister(){
        var KT1 = document.getElementById('KT1');
        var KT2 = document.getElementById('KT2');
        var KT3 = document.getElementById('KT3');
        var KT4 = document.getElementById('KT4');
        var KT5 = document.getElementById('KT5');
        var KT6 = document.getElementById('KT6');
        KT1.style.border="";
        KT2.style.border="";
        KT3.style.border="";
        KT4.style.border="";
        KT5.style.border="";
        KT6.style.border="";
        if(KT1.value==="")
        {
            KT1.style.border = "1px solid red";
            KT1.focus();
            return;
        }
        if(KT2.value === "")
        {
            KT2.style.border = "1px solid red";
            KT2.focus();
            return;
        }
        if(KT3.value==="")
        {
            KT3.style.border = "1px solid red";
            KT3.focus();
            return;
        }
        if(KT4.value === "")
        {
            KT4.style.border = "1px solid red";
            KT4.focus();
            return;
        }
        if(KT5.value==="")
        {
            KT5.style.border = "1px solid red";
            KT5.focus();
            return;
        }
        if(KT6.value === "")
        {
            KT6.style.border = "1px solid red";
            KT6.focus();
            return;
        }
        if(KT5.value!==KT6.value){
            alert("Password and Re-type password must be same");
            KT5.style.border="1px solid red";
            KT5.focus();
            return;
        }
        var url = "http://localhost:5000/aregistration/signup";
        var data = JSON.stringify({
            firstname : KT1.value,
            lastname  : KT2.value,
            contactno : KT3.value,
            emailid :KT4.value,
            pwd : KT5.value
        })
        callApi("POST",url,data,adminregistrationsuccess,errorResponse);
        //alert("Registered Successfully.....");

        KT1.value = "";
        KT2.value = "";
        KT3.value = "";
        KT4.value = "";
        KT5.value = "";
        KT6.value = "";
        var admin = document.getElementById('admin');
        var adminregistration = document.getElementById('adminregistration');
        adminregistration.style.display = 'none';
        admin.style.display = 'block';
    }
    function adminregistrationsuccess(res){
        var data = JSON.parse(res);
        alert(data);
    }
    function backtohome(){
        window.location.replace("/");
    }
    function backtoadmin(){
        window.location.replace("/admin");
    }
    return(
        <div className='full-height'>
            <div id='header' className='loginheader'>
                <center> 
                    VOTING SYSTEM
                </center>
            </div>
            <div id='content' className='logincontent'>
                <div id='admin' className='popup'>
                    <div id='popupwindow' className='popupwindow' style={popupwindowstyle} >
                        <div className='loginstyle1'>Admin Login</div>
                        <div className='loginstyle2'>
                            <div style={logodivstyle}>
                                <img src={logo} alt='' style={logostyle} />
                            </div>
                            <div>Username*</div>
                            <div><input type='text' id='T1' className='txtbox' /></div>
                            <div style={space}></div>
                            <div>Password*</div>
                            <div><input type='password' id='T2' className='txtbox' /></div>
                            <div style={space}></div>
                            <div style={space}></div>
                            <div><button className='btn' onClick={validation}>Sign In</button></div>
                            <div style={space}></div>
                            <div style={space}></div>
                            <div style={space}></div>
                            <div style={space}></div>
                            <div>New user? <label className='linklabel' onClick={adminregistration}>Register here</label></div>
                            <div style={space}></div>
                            <div style={space}></div>
                            <div>Forgot Password? <label className='linklabel' onClick={adminregistration}>Forgot Password</label></div>
                            <div style={space}></div>
                            <div style={space}></div>
                            <div>Back to Home? <label className='linklabel' onClick={backtohome}>Back to Home</label></div>
                        </div>
                    </div>
                </div>
                <div id='adminregistration' className='popup'>
                    <div id='adminregistrationwindow' className='popupwindow'  style={popupwindowstyle}>
                        <div className='loginstyle1'>New Registration</div>
                        <div className='loginstyle2'>
                            <div>First Name*</div>
                            <div><input type='text' id='KT1' className='txtbox' /></div>
                            <div style={space}></div>
                            <div>Last Name*</div>
                            <div><input type='text' id='KT2' className='txtbox' /></div>
                            <div style={space}></div>
                            <div>Contact Number*</div>
                            <div><input type='text' id='KT3' className='txtbox' /></div>
                            <div style={space}></div>
                            <div>Email ID*</div>
                            <div><input type='text' id='KT4' className='txtbox' /></div>
                            <div style={space}></div>
                            <div>Password*</div>
                            <div><input type='password' id='KT5' className='txtbox' /></div>
                            <div style={space}></div>
                            <div>Re-type Password*</div>
                            <div><input type='password' id='KT6' className='txtbox' /></div>
                            <div style={space}></div>
                            <div><button className='btn' onClick={adminregister}>Register</button></div>
                            <div style={space}></div>
                            <div>Back to Login? <label className='linklabel' onClick={backtoadmin}>Back to Admin</label></div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='footer' className='loginfooter'>eBallot @2024.</div>
        </div>
    );
}

export default Admin;