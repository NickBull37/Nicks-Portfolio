import React from 'react';
import { Box, Typography } from '@mui/material';
import { sunshot, famfiction, comingsoon } from '../utils/constants';
import { upRightSquareIcon } from '../utils/constants';

const Portfolio = () => {
    return (
        <Box id="portfolio">
            <Box className="container">
                <Typography
                    sx={{
                        fontSize: '3.75rem',
                        fontWeight: '600',
                        color: '#fff'
                    }}
                >
                    My Work
                </Typography>
                <Box className="work-list">
                    <Box className="work">
                        <img src={sunshot} alt="SunShot AI" />
                        <Box className="layer">
                            <Typography
                                sx={{
                                    fontSize: { xs: '1.5rem', md: '1.75rem' },
                                    mb: { xs: '15px', md: '25px' }
                                }}
                            >
                                SunShot AI
                            </Typography>
                            <Typography
                                textAlign="left"
                                sx={{
                                    mb: { xs: '0', md: '20px' }
                                }}
                            >
                                    This is a AI generation SaaS platform that supports text, code, image, music, and video generation. Try it out for free! Every new user gets 5 free generations.
                            </Typography>
                            <a href="https://sunshotai.com/" target="_blank" rel="noreferrer">{upRightSquareIcon}</a>
                        </Box>
                    </Box>
                    <Box className="work">
                        <img src={famfiction} alt="Fam-Fiction" />
                        <Box className="layer">
                            <Typography
                                sx={{
                                    fontSize: { xs: '1.5rem', md: '1.75rem' },
                                    mb: { xs: '15px', md: '25px' }
                                }}
                            >
                                FamFiction
                            </Typography>
                            <Typography
                                textAlign="left"
                                sx={{
                                    mb: { xs: '0', md: '20px' }
                                }}
                            >
                                A collaborative story builder and reading environment. Contribute to ongoing stories by writing or designing story art. Checkout the github link below.
                            </Typography>
                            <Typography
                                variant='body1'
                                pt={2}
                                sx={{
                                    pb: { xs: '0', md: '8px' }
                                }}
                            >
                                WORK IN PROGRESS
                            </Typography>
                            <a href="https://github.com/NickBull37/Fam-Fiction" target="_blank" rel="noreferrer">{upRightSquareIcon}</a>
                        </Box>
                    </Box>
                    <Box className="work">
                        <img src={comingsoon} alt="Coming Soon" />
                        <Box className="layer">
                            <Typography
                                sx={{
                                    fontSize: { xs: '1.5rem', md: '1.75rem' },
                                }}
                            >
                                New Projects Coming Soon!
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Portfolio;