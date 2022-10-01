import React, { useEffect } from 'react';
import Header from '../components/home-components/Header';
import Pages from '../components/home-components/Pages';
import Contact from '../components/home-components/Contact';

const HomePage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div id="home__page">
            <Header />
            <Pages />
            <Contact />
        </div>
    );
}

export default HomePage;
