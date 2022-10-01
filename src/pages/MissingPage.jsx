import React, { useState, useEffect } from 'react';
import MissingHeader from '../components/missing-components/MissingHeader';
import MissingPoster from '../components/missing-components/MissingPoster';

const MissingPage = () => {

    const [info, setInfo] = useState([])
    const [dogsType, setDogsType] = useState(true)

    function change() {
        if (dogsType) {
            setDogsType(false)
            document.querySelector('.missing__type--dogs').classList += ' type__hidden'
            document.querySelector('.missing__type--cats').classList.remove('type__hidden')
        }
        else {
            setDogsType(true)
            document.querySelector('.missing__type--cats').classList += ' type__hidden'
            document.querySelector('.missing__type--dogs').classList.remove('type__hidden')
        }
    }

    const getInfo = () => {
        fetch('http://127.0.0.1:5000/missing').then(response => {
            if (response.ok) {
                return response.json()
            }
        }).then(data => setInfo(data))
    }

    useEffect(() => {
        getInfo()
    }, [])

    return (
        <div id="missing">
            <MissingHeader />
            <div className="missing__container">
                <div className="missing__sub-title">
                    <h3 className="missing__type missing__type--dogs" onClick={change}>Dogs</h3>
                    <h3 className="missing__type missing__type--cats type__hidden" onClick={change}>Cats</h3>
                </div>
                <div className="missing__posters missing__posters--dogs">
                {
                    dogsType ? (
                        info.map((pet) => {
                                if (pet.type == 'Dog') { 
                                    return <MissingPoster index={pet.id} type={pet.type} image={pet.image} name={pet.name} breed={pet.breed} gender={pet.gender} age={pet.age} date={pet.lastSeenOn} location={pet.lastSeenIn} description={pet.description} number={pet.phoneNumber} />
                                }
                            }
                        )
                    ) : (
                        info.map((pet) => {
                                if (pet.type == 'Cat') { 
                                    return <MissingPoster index={pet.id} type={pet.type} image={pet.image} name={pet.name} breed={pet.breed} gender={pet.gender} age={pet.age} date={pet.lastSeenOn} location={pet.lastSeenIn} description={pet.description} number={pet.phoneNumber} />
                                }
                            }
                        )
                    )
                }
                </div>
            </div>
        </div>
    );
}

export default MissingPage;
