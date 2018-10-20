import React from 'react';
import './Footer.css';
import { Footer } from 'react-materialize';
import GitHub from './GitHub-Mark-Light-32px.png';
import LinkedIn from './In-White-34px-TM.png';

const MyFooter = () => {
    return (
        <div id='Footer'>
            <Footer copyrights="&copy; 2018 Copyright"
                // moreLinks={
                //     // <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                // }
                links={
                    <ul>
                        <li><a id='Name' className="grey-text text-lighten-3">Jacob Castro </a> <a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/jacob-castro-26350215b/"> <img id='FIcon' src={LinkedIn} alt="LinkedIn" /></a> <a className="grey-text text-lighten-3" href="https://github.com/jcastro72"><img id='FIcon' src={GitHub} alt="GitHub" /></a></li>
                        <li><a id='Name' className="grey-text text-lighten-3">Phokham Phanouvong </a> <a className="grey-text text-lighten-3" href="https://www.linkedin.com/in/phokham-phanouvong-7b289b56/"> <img id='FIcon' src={LinkedIn} alt="LinkedIn" /></a><a className="grey-text text-lighten-3" href="https://github.com/PPhanouvong"><img id='FIcon' src={GitHub} alt="GitHub" /></a></li>
                    </ul>
                }
                className='black'
            >
                <h4 className="white-text">Project Team</h4>
                <p id='FMessage' className="grey-text text-lighten-4">Project built for University of Central Florida Coding Bootcamp</p>
            </Footer>
        </div>
    );
};

export default MyFooter;