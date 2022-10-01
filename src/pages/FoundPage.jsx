import React, { useState, useEffect } from 'react';
import FoundHeader from '../components/found-components/FoundHeader';
import FoundPoster from '../components/found-components/FoundPoster';

const FoundPage = () => {

    const [info, setInfo] = useState([])
    const [dogsType, setDogsType] = useState(true)

    function change() {
        if (dogsType) {
            setDogsType(false)
            document.querySelector('.found__type--dogs').classList += ' type__hidden'
            document.querySelector('.found__type--cats').classList.remove('type__hidden')
        }
        else {
            setDogsType(true)
            document.querySelector('.found__type--cats').classList += ' type__hidden'
            document.querySelector('.found__type--dogs').classList.remove('type__hidden')
        }
    }

    const getInfo = () => {
        fetch('http://127.0.0.1:5000/found').then(response => {
            if (response.ok) {
                return response.json()
            }
        }).then(data => setInfo(data))
    }

    useEffect(() => {
        getInfo()
    }, [])

    return (
        <div id="found">
            <FoundHeader />
            <div className="found__container">
                <div className="found__sub-title">
                    <h3 className="found__type found__type--dogs" onClick={change}>Dogs</h3>
                    <h3 className="found__type found__type--cats type__hidden" onClick={change}>Cats</h3>
                </div>
                <div className="found__posters found__posters--dogs">
                {
                    dogsType ? (
                        info.map((pet) => {
                                if (pet.type == 'Dog') { 
                                    return <FoundPoster index={pet.id} description={pet.description} type={pet.type} image={pet.image} breed={pet.breed} gender={pet.gender} ageRange={pet.ageRange} date={pet.FoundOn} location={pet.FoundIn} number={pet.phoneNumber} />
                                }
                            }
                        )
                    ) : (
                        info.map((pet) => {
                                if (pet.type == 'Cat') { 
                                    return <FoundPoster index={pet.id} description={pet.description} type={pet.type} image={pet.image} breed={pet.breed} gender={pet.gender} ageRange={pet.ageRange} date={pet.FoundOn} location={pet.FoundIn} number={pet.phoneNumber} />
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

export default FoundPage;
