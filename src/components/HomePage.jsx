import React from 'react';
import { Header, About, Services, WorkHistory, Portfolio, Contact } from '../components';

const HomePage = () => {
    return (
        <>
            <Header />
            <About />
            <Services />
            <WorkHistory />
            <Portfolio />
            <Contact />
        </>
    );
}

export default HomePage;