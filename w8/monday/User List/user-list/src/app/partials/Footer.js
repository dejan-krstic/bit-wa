import React from 'react';


const Footer = props => <footer id="footer" className="page-footer">
    <div className="footer-copyright">
        <div className="container">
            <p>&copy; 2018 Copyright BIT</p>
            <p> {props.updateDuration}</p>
        </div>
    </div>
</footer>

export default Footer;