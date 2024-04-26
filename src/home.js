import React, { useState, useEffect } from "react";
import './home.css';
import { NavLink } from "react-router-dom";
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';

const HS1 = { "paddingLeft": "5px", "marginRight": "20px", "color": "#fff", "fontFamily": "Arial, sans-serif", "fontSize": "15px", "fontWeight": "bold" };
const HS4 = {"float" : "right", "paddingRight" : "10px"};
const contentStyle = {"flex": 1, "padding": "10px"}; // Style for content div

const images = [image1, image2, image3]; // Array of images

function Home() {
    const [index, setIndex] = useState(0); // State to track current image index

    // Function to advance to the next image
    // eslint-disable-next-line
    const nextSlide = () => {
        setIndex((index + 1) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval); // Clean up on unmount
    }, [nextSlide]); // Include nextSlide in the dependency array
    

    const login = () => {
        window.location.replace("/login");
    };

    const adminlogin = () => {
        window.location.replace("/admin");
    };

    const learnmore = () => {
        window.location.replace("/learnmore");
    };

    return(
        <div className='full-height'>
            <div className='header' style={{backgroundColor: '#0047ab', padding: '10px'}}>
                <label style={HS1}>eBallot | ONLINE VOTING MANAGEMENT SYSTEM</label>
                <NavLink to="/" className="nav-link" style={{color: '#fff', textDecoration: 'none', marginRight: '10px'}}>Home</NavLink>
                <NavLink to="/about" className="nav-link" style={{color: '#fff', textDecoration: 'none', marginRight: '10px'}}>About</NavLink>
                <NavLink to="/mobile" className="nav-link" style={{color: '#fff', textDecoration: 'none', marginRight: '10px'}}>Mobile Voting</NavLink>
                <NavLink to="/contact" className="nav-link" style={{color: '#fff', textDecoration: 'none', marginRight: '10px'}}>Contact us</NavLink>
                <button className="button" onClick={login} style={{backgroundColor: '#4CAF50', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', marginRight: '10px'}}>LOGIN</button>
                <button className="button1" onClick={adminlogin} style={{backgroundColor: '#f44336', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer'}}>ADMIN LOGIN</button>
                <label id='HL1' style={HS4}></label>
                <div id="header"></div>
            </div>
            <div className='content' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> 
                <img src={images[index]} alt='' style={{...contentStyle, "maxWidth": "50%", boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', borderRadius: '5px'}}/> 
                <div style={contentStyle}>
                    <h1 className="multi-color-text" style={{fontSize: '32px', marginBottom: '20px'}}>WELCOME TO ONLINE VOTING MANAGEMENT SYSTEM</h1>
                    <p style={{fontSize: '18px', marginBottom: '20px'}}>At our online voting platform, we believe in empowering our community to participate in the democratic process. Our online voting platform offers a convenient and secure way for eligible voters to cast their ballots from the comfort of their own homes.</p>  
                    <button className="btn" onClick={learnmore} style={{backgroundColor: '#008CBA', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer'}}>Learn More</button>
                
                </div>
            </div>
            <div className='footer' style={{backgroundColor: '#0047ab', padding: '10px'}}>
                Copyright © 2024, eBallot.
            </div>
        </div>
    );
}

export default Home;
