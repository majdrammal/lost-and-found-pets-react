import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PagesSection from '../ui/PagesSection';

const Pages = () => {
    return (
        <div id="pages">
            <div className="pages__container">
                <PagesSection icon = 'face-frown' title = 'Browse Missing Pets' para = 'Search our website for your missing cat or dog.' btn = 'Missing Pets' link='/missing'/>
                <PagesSection icon = 'flag' title = 'Report A Missing/Found Pet' para = 'Fill in the form to report a missing/found pet.' btn = 'Report' link='/report'/>
                <PagesSection icon = 'face-smile' title = 'Browse Found Pets' para = 'Check whether your missing cat or dog has been found.' btn = 'Found Pets' link='/found'/>
            </div>
        </div>
    );
}

export default Pages;
