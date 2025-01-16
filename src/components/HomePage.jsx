import React from 'react';
import { styled } from '@mui/material/styles';
import { Stack } from '@mui/material';
import { Hero, About, Services, WorkHistory, Portfolio, Contact } from '../components';
import { Navbar, MobileNavbar, Footer } from '../components';

const AppContainer = styled(Stack)(() => ({
    paddingRight: '0',
    paddingLeft: '0',
}));

const PageContainer = styled(Stack)(({ theme }) => ({
    paddingRight: '14%',
    paddingLeft: '14%',
    [theme.breakpoints.down('md')]: {
        paddingRight: '10%',
        paddingLeft: '10%',
    },
}));

const HomePage = () => {
    return (
        <AppContainer>

            <Navbar />
            <MobileNavbar />

            <PageContainer>
                <Hero />
                <About />
                <Services />
                <WorkHistory />
                <Portfolio />
                <Contact />
            </PageContainer>
            <Footer />
        </AppContainer>
    );
}

export default HomePage;