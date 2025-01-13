import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Stack, Typography, Button } from '@mui/material';

const HeroContainer = styled(Box)(() => ({
    height: 'calc(100vh - 60px)',
    border: '1px solid red',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}));

const HeroTextContainer = styled(Stack)(() => ({
    display: 'flex',
}));

const HeroTextLarge = styled(Typography)(() => ({
    fontSize: '3.75rem',
    fontWeight: '700',
    lineHeight: '1.235',
}));

const HeroTextSmall = styled(Typography)(() => ({
    fontSize: '1.5rem',
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