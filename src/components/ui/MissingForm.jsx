import React, { useState } from 'react';
import { storage } from '../../firebase-config';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const MissingForm = () => {

    const [type, setType] = useState('Dog')
    const [name, setName] = useState('N/A')
    const [breed, setBreed] = useState('N/A')
    const [gender, setGender] = useState('N/A')
    const [age, setAge] = useState('N/A')
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
                        console.log(url)
                        handleFormSubmit(url)
                    });
                }
            );

        };
    }

    const handleFormSubmit = (imageUrl) => {
        fetch('http://127.0.0.1:5000/missing/create', {
            method: 'POST',
            body: JSON.stringify({
                type: type,
                name: name,
                breed: breed,
                gender: gender,
                age: age,
                lastSeenIn: location,
                lastSeenOn: date,
                phoneNumber: phoneNumber,
                description: description,
                image: imageUrl,
            }),
            headers: {
                'Content-type': "application/json; charset=UTF-8",
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'
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
        <form action="" className="report__form report__form--missing">
            <div className="form__container">
                <div className="form__item">
                    <div className="form__label--report">Type</div>
                    <select onChange={changeType}>
                        <option value="Dog">Dog</option>
                        <option value="Cat">Cat</option>
                    </select>
                </div>
                <div className="form__item">
                    <div className="form__label--report">Name</div>
                    <input onChange={event => setName(event.target.value)} type="text" className="form__input--report" placeholder='Name of pet' />
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
                    <div className="form__label--report">Age</div>
                    <input onChange={event => setAge(event.target.value)} type="text" className="form__input--report" placeholder='Age of pet' />
                </div>
                <div className="form__item">
                    <div className="form__label--report">Last Seen Location</div>
                    <input onChange={event => setLocation(event.target.value)} type="text" className="form__input--report" placeholder='Example: Hamra' />
                </div>
                <div className="form__item">
                    <div className="form__label--report">Last Seen Date</div>
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

export default MissingForm;
