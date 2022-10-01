import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MissingPoster = ({ index, type, image, name, breed, gender, age, date, location, description, number}) => {

    function toggleDelete() {
        document.querySelector(`.found__text--${index}`).classList += ' found__hidden'
        document.querySelector(`.delete__text--${index}`).classList.remove('found__hidden')
    }

    function toggleNo() {
        document.querySelector(`.delete__text--${index}`).classList += ' found__hidden'
        document.querySelector(`.found__text--${index}`).classList.remove('found__hidden')
    }

    function deletePost() {
        fetch(`http://localhost:5000/missing/${index}`, {
            method: 'POST',
            body: JSON.stringify({
                id: index 
            })
        }).then(response => response.json())
            .then(data => {
                console.log(data)
                document.location.reload()
            })
    }

    let desc = false
    function showDescription() {
        if (!desc) { 
            document.querySelector(`.poster__information--${index}`).classList.remove('message__hidden')
            desc = true
        }
        else { 
            document.querySelector(`.poster__information--${index}`).classList += ' message__hidden'
            desc = false
        }
    }

    return (
        <div className="missing__poster" key={index}>
            <div className={`poster__information poster__information--${index} message__hidden`}>
                <p className="poster__information--text">{description !== '' ? description.toLowerCase() : "No description available."}</p>
                <FontAwesomeIcon icon="fa-x" onClick={showDescription}/>
            </div>
            <h2 className="poster__title">Missing {type}</h2>
            <div className="poster__body">
                <img className='poster__img' src={image} alt="" />
                    <ul className="poster__descriptions">
                        <li className="poster__description"><b>Name: </b>{name}</li>
                        <li className="poster__description"><b>Breed: </b>{breed}</li>
                        <li className="poster__description"><b>Gender: </b>{gender}</li>
                        <li className="poster__description"><b>Age: </b>{age}</li>
                        <br/>
                        <li className="poster__description">
                            <b>Last Seen On: </b>
                            <br/>
                            {date}
                        </li>
                        <li className="poster__description">
                            <b>Last Seen At: </b>
                            <br/>
                            {location}
                        </li>
                        <br/>
                        <li className="poster__description information__toggle" onClick={showDescription}><b>Description </b>&#x1F6C8;</li>
                    </ul>
            </div>
            <div className="poster__footer">
                <h3 className="poster__footer--title">Call or Text with any information</h3>
                <h2 className="poster__number">{number}</h2>
            </div>
            <p className={`found__text found__text--${index}`} onClick={toggleDelete}>Found?</p>
            <p className={`delete__text delete__text--${index} found__hidden`}>Delete Post? <span onClick={deletePost} className='yes'>Yes</span> | <span onClick={toggleNo} className='no'>No</span></p>
        </div>
    );
}

export default MissingPoster;
