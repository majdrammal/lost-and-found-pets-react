import React, { useState, useEffect } from 'react';
import ReportHeader from '../components/report-components/ReportHeader';
import FoundForm from '../components/ui/FoundForm';
import MissingForm from '../components/ui/MissingForm';

const Report = () => {

    const [missingType, setMissingType] = useState(true)
    const [type, setType] = useState('Your Missing')

    function change() {
        if (missingType) {
            document.querySelector('.report__type--missing').classList += ' type__hidden'
            document.querySelector('.report__type--found').classList.remove('type__hidden')
            setMissingType(false)
            setType('A Found')
        }
        else {
            document.querySelector('.report__type--found').classList += ' type__hidden'
            document.querySelector('.report__type--missing').classList.remove('type__hidden')
            setMissingType(true)
            setType('Your Missing')
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div id='report'>
            <ReportHeader />
            <div className="report__container">
                <div className="report__sub-title">
                    <h3 className="report__type report__type--missing" onClick={change}>Missing Pet</h3> 
                    <h3 className="report__type report__type--found type__hidden" onClick={change}>Found Pet</h3>
                </div>
            </div>
            <h3 className="form__success message__hidden">You Successfully Added {type} Pet.</h3>
            {
                missingType ? (
                    <MissingForm />

                ) : (

                    <FoundForm />
                )
            }
        </div>
    );
}

export default Report;

