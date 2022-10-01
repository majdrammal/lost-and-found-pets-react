import React from 'react';
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Nav = () => {

    let open = false
    function toggleNavBar() {
        if (!open) {
            document.querySelector('.nav__bar').classList.remove('nav__bar--hidden')
            open = true
        }
        else {
            document.querySelector('.nav__bar').classList += ' nav__bar--hidden'
            open = false
        }
    }

    return (
        <nav>
            <div className="nav__container">
                <Link to="/"><img className="logo" src={logo} alt="" /></Link>
                <ul className="nav__links">
                    <Link className="nav__link" to="/missing">Browse Missing</Link>
                    <Link className="nav__link" to="/found">Browse Found</Link>
                    <Link className="nav__link" to="/report">
                        <button className="report__btn">Report</button>
                    </Link>
                </ul>
                <FontAwesomeIcon icon='fa-bars' onClick={toggleNavBar}/>
            </div>
        </nav>
    );
}

export default Nav;
