import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PagesSection = ({ icon, title, para, btn, link }) => {
    return (
        <div className="pages__section">
            <FontAwesomeIcon icon={`fa-solid fa-${icon}`} />
            <h2 className="pages__title">{title}</h2>
            <p className="pages__para">{para}</p>
            <Link to={link}>
                <button className="pages__btn">{btn}</button>
            </Link>
        </div>
    );
}

export default PagesSection;
