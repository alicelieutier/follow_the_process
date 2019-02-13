import React from 'react';
import './Footer.css';

const Footer = ({title, description, navigation}) => (
    <footer className="Footer">
        <ul>
            <li><a href="https://github.com/alicelieutier/follow_the_process">See this project in GitHub</a></li>
            <li><a href="https://makers.tech">Learn more about Makers</a></li>  
        </ul>
        <div className="copyright">
            <p>&copy; 2019 Makers.tech</p>
        </div>  
    </footer>
)

export default Footer;
