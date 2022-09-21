import React from "react";
import '../../App.css';

class About extends React.Component {
    render() {
    
    return (
        <>
            <div className="container-fluid" id="About">
                <div className="aboutHeader">
                    <h1>Dwi Samsiarto</h1>
                </div>
                <p>I am an active assistant at the Information Retrieval Laboratory.
                    And also enthusiastic about design and front-end developments.
                </p>
                <p>
                    To see me in more details or my projects, here me 
                    <a 
                    className="link" 
                    href="https://github.com/DwiSam"
                    >
                        Github
                    </a>
                    <a 
                    className="link" 
                    href="https://www.linkedin.com/in/dwi-sam/"
                    >
                        LinkedIn
                    </a>
                </p>

            </div>
        </>
    );
    }
}

export default About;