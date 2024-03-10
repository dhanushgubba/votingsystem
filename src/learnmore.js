import React from "react";
import './learnmore.css';
import { NavLink } from "react-router-dom";
import image2 from './images/image2.jpg'; // Import left image
import image3 from './images/image3.jpg'; // Import right image

const HS1 = { "paddingLeft": "5px", "marginRight": "20px" };
const HS4 = {"float" : "right", "paddingRight" : "10px"};

class Learnmore extends React.Component {
    home(){
        window.location.replace("/");
    }
    render() {
        return (
            <div className='full-height'>
                <div className='header'>
                    <label style={HS1}>eBallot | ONLINE VOTING MANAGEMENT SYSTEM</label>
                    <NavLink to="/" className="nav-link">Home</NavLink>
                    <NavLink to="/about" className="nav-link">About</NavLink>
                    <NavLink to="/mobile" className="nav-link">Mobile Voting</NavLink>
                    <NavLink to="/contact" className="nav-link">Contact us</NavLink>
                    <NavLink to="/help" className="nav-link">Help/Support</NavLink>
                    <button className="button" onClick={this.home}>Back to Home</button>
                    <label id='HL1' style={HS4}></label>
                    <div id="header"></div>
                </div>
                <div className='content'>
                    <div className="learn-more-container">
                        <div className="left-image">
                            <img src={image2} alt="VOTING SYSTEM" />
                        </div>
                        <div className="content-text">
                            <h1>Overview of the Online Voting System:</h1>
                            <p>Our online voting system provides a convenient and secure platform for users to participate in the democratic process. Key features include easy registration, real-time results, and voter verification.</p>

                            <h1>Advantages of Online Voting:</h1>
                            <p>Online voting offers numerous advantages over traditional voting methods. It provides convenience, accessibility, and enhanced security measures to protect voter privacy and ensure the integrity of the voting process.</p>

                            <h1>How It Works:</h1>
                            <p>The process of using the online voting system is straightforward. Users can register to vote, cast their ballots, and verify their votes securely from any device. Advanced security measures are in place to protect voter privacy and prevent fraud.</p>

                            <h1>Key Features:</h1>
                            <p>Our online voting system boasts several key features designed to enhance user experience and promote democratic participation. These include easy registration, real-time results, and robust voter verification mechanisms.</p>

                            <h1>Get Involved:</h1>
                            <p>We encourage users to get involved in the voting process by registering as voters or candidates. Your participation is crucial in shaping the future of our democracy.</p>

                            <div className="right-image">
                                <img src={image3} alt="VOTING SYSTEM" />
                            </div>
                            <h1>Support and Resources:</h1>
                            <p>We offer comprehensive support channels for users who need assistance. Whether you have questions or require technical support, our team is here to help. Additionally, you can access FAQs, user guides, and contact information for customer support.</p>

                            <h1>Stay Informed:</h1>
                            <p>Stay up-to-date with the latest news and updates from our online voting system. Subscribe to our newsletter or follow us on social media for the latest announcements and important information.</p>

                            <h1>Conclusion:</h1>
                            <p>In summary, our online voting system provides a user-friendly and secure platform for democratic participation. We invite you to explore the rest of our platform and participate in shaping the future of our democracy.</p>
                        </div>
                        
                    </div>
                </div>
                <div className='footer'>
                    Copyright © 2024, eBallot.
                </div>
            </div>
        );
    }
}

export default Learnmore;
