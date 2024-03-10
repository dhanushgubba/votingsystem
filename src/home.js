import React from "react";
import './home.css';
import { NavLink } from "react-router-dom";
import image1 from './images/image1.jpg'

const HS1 = { "paddingLeft": "5px", "marginRight": "20px" };
const HS4 = {"float" : "right", "paddingRight" : "10px"};
const HS3 = {"width": "800px", "height": "700px", "margin": "0 auto"}; // Define HS3 style
const contentStyle = {"flex": 1, "padding": "10px"}; // Style for content div

class Home extends React.Component {
    login() {
        window.location.replace("/login");
    }
    learnmore(){
        window.location.replace("/learnmore")
    }

    render() {
        return(
            <div className='full-height'>
                <div className='header'>
                    <label style={HS1}>eBallot | ONLINE VOTING MANAGEMENT SYSTEM</label>
                    <NavLink to="/" className="nav-link">Home</NavLink>
                    <NavLink to="/about" className="nav-link">About</NavLink>
                    <NavLink to="/mobile" className="nav-link">Mobile Voting</NavLink>
                    <NavLink to="/contact" className="nav-link">Contact us</NavLink>
                    <button className="button" onClick={this.login}>Login</button>
                    <label id='HL1' style={HS4}></label>
                    <div id="header"></div>
                </div>
                <div className='content' style={{display: 'flex'}}> 
                    <img src={image1} alt='' style={HS3}/> 
                    <div style={contentStyle}>
                        <h1>WELCOME TO ONLINE VOTING MANAGEMENT SYSTEM</h1>
                        <p>At our online voting platform, we believe in empowering our community to participate in the democratic process. Our online voting platform offers a convenient and secure way for eligible voters to cast their ballots from the comfort of their own homes.</p>  
                        <button className="btn" onClick={this.learnmore}>Learn More</button>
                    
                    </div>
                </div>
                <div className='footer'>
                    Copyright © 2024, eBallot.
                </div>
            </div>
        );
    }
}

export default Home;
