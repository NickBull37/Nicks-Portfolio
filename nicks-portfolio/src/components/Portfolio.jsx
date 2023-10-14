import React from 'react';
import { Box, Typography } from '@mui/material';
import { work1, work2, work3 } from '../utils/constants';
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
                        <img src={work1} alt="" />
                        <Box className="layer">
                            <Typography
                                sx={{
                                    fontSize: '1.5rem',
                                    mb: '15px'
                                }}
                            >
                                Collaborative Story Builder
                            </Typography>
                            <Typography>This site is a collaborative story builder and reading environment.</Typography>
                            <a href="https://github.com/NickBull37/Fam-Fiction">{upRightSquareIcon}</a>
                        </Box>
                    </Box>
                    <Box className="work">
                        <img src={work2} alt="" />
                        <Box className="layer">
                            <Typography
                                sx={{
                                    fontSize: '1.5rem',
                                    mb: '15px'
                                }}
                            >
                                Music App
                            </Typography>
                            <Typography>The app connects you to the talented people around the world. Download it from the play store.</Typography>
                            <a href="#">{upRightSquareIcon}</a>
                        </Box>
                    </Box>
                    <Box className="work">
                        <img src={work3} alt="" />
                        <Box className="layer">
                            <Typography
                                sx={{
                                    fontSize: '1.5rem',
                                    mb: '15px'
                                }}
                            >
                                Online Shopping App
                            </Typography>
                            <Typography>The app connects you to the talented people around the world. Download it from the play store.</Typography>
                            <a href="#">{upRightSquareIcon}</a>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Portfolio;