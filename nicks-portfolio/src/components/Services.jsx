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
                        <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
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
                        <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
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
                        <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Services;