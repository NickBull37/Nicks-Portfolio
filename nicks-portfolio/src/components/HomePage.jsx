import React from 'react';
import { Header, About, Services, Portfolio, Contact } from '../components';

const HomePage = () => {
    return (
        <>
            <Header />
            <About />
            <Services />
            <Portfolio />
            <Contact />
        </>
    );
}

export default HomePage;