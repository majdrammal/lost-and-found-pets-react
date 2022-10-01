import React from 'react';
import logo from '../assets/logo.png'
import Copyright from './ui/Copyright';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div id="footer">
            <div className="footer__container">
                <a href="#">
                    <img className="footer__logo" src={logo} alt="" />
                </a>
                <ul className="footer__links">
                    <Link to="/" className="footer__link">Home</Link>
                    <Link to="/missing" className="footer__link">Missing</Link>
                    <Link to="/found" className="footer__link">Found</Link>
                    <Link to="/report" className="footer__link">Report</Link>
                </ul>
                <Copyright />
            </div>
        </div>
    );
}

export default Footer;
