import React from 'react';
import { Box, Typography } from '@mui/material';
import { codeIcon, cropIcon, laptopCodeIcon } from '../utils/constants'

const Services = () => {
    return (
        <Box id="services">
            <Box className="container">
                <Typography
                    sx={{
                        fontSize: '3.75rem',
                        fontWeight: '600',
                        color: '#fff'
                    }}
                >
                    My Services
                </Typography>
                <Box className="services-list">
                    <Box>
                        {codeIcon}
                        <Typography
                            variant="h5"
                            sx={{
                                fontSize: '1.75rem',
                                fontWeight: '500',
                                mb: '15px'
                            }}
                        >
                            Full-Stack Development
                        </Typography>
                        <Typography>My goal is to expand my skill set to be as flexible as possible so I can contribute wherever I'm needed and participate in all areas of the SDLC.</Typography>
                    </Box>
                    <Box>
                        {laptopCodeIcon}
                        <Typography
                            variant="h5"
                            sx={{
                                fontSize: '1.75rem',
                                fontWeight: '500',
                                mb: '15px'
                            }}
                        >
                            External Integrations
                        </Typography>
                        <Typography>I have built 3rd party integrations with public APIs for AI generation (ChatGPT & Replicate), payment processing (Paya & Authorize.net) and others.</Typography>
                    </Box>
                    <Box>
                        {cropIcon}
                        <Typography
                            variant="h5"
                            sx={{
                                fontSize: '1.75rem',
                                fontWeight: '500',
                                mb: '15px'
                            }}
                        >
                            UI/UX Design
                        </Typography>
                        <Typography>I pride myself on designing interfaces that are elegant in appearence and intuitive for users at any level in both desktop and mobile formats. </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Services;