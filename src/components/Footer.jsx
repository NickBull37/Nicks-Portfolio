import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box
            className="copyright"
        >
            <Typography>
                Copyright <span className="color-purple">©</span> Nick.
            </Typography>
        </Box>
    );
}

export default Footer;