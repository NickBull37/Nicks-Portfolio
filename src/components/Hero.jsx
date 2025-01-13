import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Stack, Typography, Button } from '@mui/material';

const HeroContainer = styled(Box)(({ theme }) => ({
    height: 'calc(100vh - 70px)',
    //border: '1px solid red',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: { // for smaller screens
        flexDirection: 'column-reverse',
        justifyContent: 'flex-end',
        height: 'auto'
    },
}));

const HeroTextContainer = styled(Stack)(({ theme }) => ({
    display: 'flex',
    marginTop: '0',
    [theme.breakpoints.down('md')]: { // for smaller screens
        marginTop: '2rem',
    },
}));

const HeroTextLarge = styled(Typography)(({ theme }) => ({
    fontSize: '3.75rem',
    fontWeight: '700',
    lineHeight: '1.235',
    [theme.breakpoints.down('md')]: { // for smaller screens
        fontSize: '2.5rem',
    },
}));

const HeroTextSmall = styled(Typography)(({ theme }) => ({
    fontSize: '1.5rem',
    [theme.breakpoints.down('md')]: { // for smaller screens
        fontSize: '1.25rem',
    },
}));

const HeroImageContainer = styled(Box)(() => ({

}));

const Hero = () => {
    return (
        <HeroContainer>

            <HeroTextContainer>

                <HeroTextLarge>
                    Hi, my name is 
                </HeroTextLarge>

                <HeroTextLarge
                    className='grad-text brave-h2'
                >
                    Nick Bulisky
                </HeroTextLarge>

                <HeroTextSmall
                    sx={{
                        mt: '30px'
                    }}
                >
                    I am a full-stack software developer<br />from Pennsylvania.
                </HeroTextSmall>

            </HeroTextContainer>

            <HeroImageContainer
                id='hero-img'
            >
            </HeroImageContainer>

        </HeroContainer>
    );
}

export default Hero;