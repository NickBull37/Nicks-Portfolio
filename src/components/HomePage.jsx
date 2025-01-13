import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Stack, Typography, Button } from '@mui/material';
import { Hero, About, Services, WorkHistory, Portfolio, Contact } from '../components';
import { Navbar, Footer } from '../components';

const AppContainer = styled(Stack)(() => ({
    paddingRight: '0',
    paddingLeft: '0',
}));

const PageContainer = styled(Stack)(() => ({
    paddingRight: '14%',
    paddingLeft: '14%',
}));

const HomePage = () => {
    return (
        <AppContainer>
            <Navbar />
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