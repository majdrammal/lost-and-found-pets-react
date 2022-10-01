import React, { useState } from 'react';
import { storage } from '../../firebase-config';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const FoundForm = () => {

    const [type, setType] = useState('Dog')
    const [breed, setBreed] = useState('N/A')
    const [gender, setGender] = useState('N/A')
    const [ageRange, setAgeRange] = useState('N/A')
    const [location, setLocation] = useState('N/A')
    const [date, setDate] = useState('N/A')
    const [phoneNumber, setPhoneNumber] = useState('N/A')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState("")
    const [loading, setLoading] = useState(false)

    function saveImage(e) {
        e.preventDefault()
        if (!image) {
            alert("Please upload an image.")
        }
        else {
            const storageRef = ref(storage, `/images/${image.name}`);
            const uploadTask = uploadBytesResumable(storageRef, image);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    setLoading(
                        Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                    )
                },
                (err) => console.log(err),
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                        handleFormSubmit(url)
                    });
                }
            );

        };
    }

    const handleFormSubmit = (imageUrl) => {
        fetch('http://127.0.0.1:5000/found/create', {
            method: 'POST',
            body: JSON.stringify({
                type: type,
                breed: breed,
                gender: gender,
                ageRange: ageRange,
                FoundIn: location,
                FoundOn: date,
                phoneNumber: phoneNumber,
                description: description,
                image: imageUrl
            }),
            headers: {
                'Content-type': "application/json; charset=UTF-8"
            }
        }).then(response => response.json())
            .then(data => {
                console.log(data)
                document.querySelector('.form__success').classList.remove('message__hidden')
                window.scrollTo(0, 0);
            })
    }

    function changeType() {
        const selectElement = document.querySelector('select');
        setType(selectElement.options[selectElement.selectedIndex].value)
    }

    return (
        <form action="" className="report__form report__form--found">
            <div className="form__container">
                <div className="form__item">
                    <div className="form__label--report">Type</div>
                    <select onChange={changeType}>
                        <option value="Dog">Dog</option>
                        <option value="Cat">Cat</option>
                    </select>
                </div>
                <div className="form__item">
                    <div className="form__label--report">Breed</div>
                    <input onChange={event => setBreed(event.target.value)} type="text" className="form__input--report" placeholder='Breed of pet' />
                </div>
                <div className="form__item">
                    <div className="form__label--report">Gender</div>
                    <input onChange={event => setGender(event.target.value)} type="text" className="form__input--report" placeholder='Gender of pet' />
                </div>
                <div className="form__item">
                    <div className="form__label--report">Age Range</div>
                    <input onChange={event => setAgeRange(event.target.value)} type="text" className="form__input--report" placeholder='Age of pet' />
                </div>
                <div className="form__item">
                    <div className="form__label--report">Found Location</div>
                    <input onChange={event => setLocation(event.target.value)} type="text" className="form__input--report" placeholder='Example: Hamra' />
                </div>
                <div className="form__item">
                    <div className="form__label--report">Found Date</div>
                    <input onChange={event => setDate(event.target.value)} type="text" className="form__input--report" placeholder='Example: October 4 2022' />
                </div>
                <div className="form__item">
                    <div className="form__label--report">Phone Number</div>
                    <input onChange={event => setPhoneNumber(event.target.value)} type="text" className="form__input--report" placeholder='Your Lebanese phone number' />
                </div>
                <div className="form__item">
                    <div className="form__label--report">Description</div>
                    <textarea onChange={event => setDescription(event.target.value)} type="text" className="form__input--report" placeholder='Any additional information' />
                </div>
                <div className="form__item form__item--file">
                    <label for="form__input--file" className="form__label--report form__label--file">Image of Pet</label>
                    <input accept="image/*" id="form__input--file" type="file" placeholder="Image of Pet" onChange={event => setImage(event.target.files[0])} />
                </div>
                <button className="report__form--btn" onClick={event => saveImage(event)}>Submit</button>
                { loading && <p className="loading__status">Submitting: {loading}%</p> }
            </div>
        </form>
    );
}

export default FoundForm;
