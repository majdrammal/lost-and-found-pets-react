import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div id='nav__bar' className="nav__bar nav__bar--hidden">
            <ul className="nav__bar--links">
                <Link to="/" className="nav__bar--link">Home</Link> 
                <Link to="/missing" className="nav__bar--link">Missing</Link> 
                <Link to="/found" className="nav__bar--link">Found</Link> 
                <Link to="/report" className="nav__bar--link">Report</Link> 
            </ul>
        </div>
    );
}

export default NavBar;
