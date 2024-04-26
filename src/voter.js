import React from 'react'
import './voter.css'
import logouticon from './images/logout.png'
import { callApi, errorResponse, getSession, setSession } from './main';
import { NavLink } from 'react-router-dom';
import menuicon from './images/menu.jpg'

const HS1 = { "paddingLeft": "5px", "marginRight": "20px" };
const HS2 = {"float" : "right", "padding-right" : "5px", "cursor" : "pointer"};
const HS3 = {"float" : "right", "height" : "16px", "margin-top" : "6px", "cursor" : "pointer"}
const HS4 = {"float" : "right", "padding-right" : "10px"}

export function loadMenu(res)
{
    var data = JSON.parse(res);
    var menuitems = "";
    for(var x in data)
    {
        menuitems += `<li>
                        <label id='${data[x].mid}L' >${data[x].mtitle}</label>
                        <div id='${data[x].mid}' class='smenu'></div>
                      </li>`;
    }
    var mlist = document.getElementById('mlist');
    mlist.innerHTML = menuitems;

    for(x in data)
    {
        document.getElementById(`${data[x].mid}L`).addEventListener("click", showSMenu.bind(null, data[x].mid));
    }
}

export function showSMenu(mid){
    var surl = "http://localhost:5000/home/menus"; 
    var ipdata = JSON.stringify({
        mid : mid
    });
    callApi("POST", surl, ipdata, loadSMenu, errorResponse);
        
    var smenu = document.getElementById(mid);
    if(smenu.style.display === "block")
        smenu.style.display = "none";
    else
        smenu.style.display = "block";
}

export function loadSMenu(res)
{
    var data = JSON.parse(res);
    var smenuitems = "";
    for(var x in data)
    {
        smenuitems += `<label id='${data[x].smid}'>${data[x].smtitle}</label>`;
    }
    var smenu = document.getElementById(`${data[x].mid}`);
    smenu.innerHTML = smenuitems;

    for(x in data)
    {
        document.getElementById(`${data[x].smid}`).addEventListener("click", loadModule.bind(null, data[x].smid));
    }
}

export function loadModule(smid)
{
   var titlebar = document.getElementById('titlebar');
   var module = document.getElementById('module');
   switch(smid)
   {
        case "M00101":
            module.src = "/voterregistration";
            titlebar.innerText = "Voter Registration";
            break;
        case "M00102":
            module.src = "/candidatevote";
            titlebar.innerText = "";
            break;
        case "M00103":
            module.src = "/electionvoting";
            titlebar.innerText = "Election Voting";
            break;
        default:
            module.src = "";
            titlebar.innerText = "";
   }
}

class Voter extends React.Component
{
    constructor()
    {
        super();
        this.sid = getSession("sid");
        //alert(this.sid);
        if(this.sid === "")
            window.location.replace("/");

        var url = "http://localhost:5000/home/uname";
        var data = JSON.stringify({
            emailid : this.sid
        });
        callApi("POST", url, data, this.loadUname, errorResponse);

        url = "http://localhost:5000/home/menu";
        callApi("POST", url, "", loadMenu, errorResponse);
    }

    loadUname(res)
    {
        var data = JSON.parse(res);
        var HL1 = document.getElementById("HL1");
        HL1.innerText = `${data[0].firstname} ${data[0].lastname}`
    }

    logout()
    {
        setSession("sid", "", -1);
        window.location.replace("/");
    }

    render()
    {
        return(
            <div className='full-height4'>
                <div className='header4'>
                    <label style={HS1}>eBallot|ONLINE VOTING MANAGEMENT SYSTEM</label>
                    <label style={HS2} onClick={this.logout}>Logout</label>
                    <NavLink to="/home1" className="nav-link">Home</NavLink>
                    <NavLink to="/about1" className="nav-link">About</NavLink>
                    <NavLink to="/voter" className="nav-link">Voter Registration</NavLink>
                    <NavLink to="/politicalparties" className="nav-link">Political Parties</NavLink>
                    <NavLink to="/changepassword" className="nav-link">Change Password</NavLink>
                    <img src={logouticon} alt='' style={HS3} onClick={this.logout} />
                    <label id='HL1' style={HS4}></label>
                </div>
                <div className='content1'>
                    <div className='menubar'>
                        <div className='menuheader'>
                            <img src={menuicon} alt='' />
                            <label>MENU</label>
                        </div>
                        <div className='menu'>
                            <nav><ul id='mlist' className='mlist'></ul></nav>
                        </div>
                    </div>
                    <div className='outlet'>
                        <div id='titlebar'></div>
                        <iframe id='module' src="" title='module' ></iframe>
                    </div>
                </div>
                <div className='footer4'>
                    eBallot Online Voting|Copyright@2024.
                </div>
            </div>
        );
    }
}

export default Voter;